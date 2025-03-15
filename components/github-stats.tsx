"use client"

import { motion } from "framer-motion"
import { Calendar, Code, Star, GitFork } from "lucide-react"
import { useEffect, useState } from "react"

interface GitHubContributionDay {
  contributionCount: number;
  date: string;
}

interface GitHubLanguage {
  node: {
    name: string;
    color: string;
  };
  size: number;
}

interface GitHubRepo {
  stargazerCount: number;
  forkCount: number;
  languages: {
    edges: GitHubLanguage[];
  };
}

interface Language {
  name: string;
  percentage: number;
}

interface Stats {
  contributions: number;
  repositories: number;
  stars: number;
  forks: number;
  languages: Language[];
  contributionGraph: { contributionDays: GitHubContributionDay[] }[];
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats>({
    contributions: 0,
    repositories: 0,
    stars: 0,
    forks: 0,
    languages: [],
    contributionGraph: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        setIsLoading(true)
        const response = await fetch('/api/github')
        const data = await response.json()
        
        if (!data?.data?.user) {
          console.error('GitHub API response:', data)
          return
        }

        const user = data.data.user
        
        // Calculate total stars and forks
        const repoStats = user.repositories.nodes.reduce((acc: { stars: number; forks: number }, repo: GitHubRepo) => ({
          stars: acc.stars + repo.stargazerCount,
          forks: acc.forks + repo.forkCount
        }), { stars: 0, forks: 0 })

        // Calculate language percentages
        const languageMap = new Map<string, number>()
        user.repositories.nodes.forEach((repo: GitHubRepo) => {
          repo.languages.edges.forEach((edge: GitHubLanguage) => {
            const current = languageMap.get(edge.node.name) || 0
            languageMap.set(edge.node.name, current + edge.size)
          })
        })

        const totalSize = Array.from(languageMap.values()).reduce((a, b) => a + b, 0)
        const languages = Array.from(languageMap.entries())
          .map(([name, size]) => ({
            name,
            percentage: Math.round((size / totalSize) * 100)
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5)

        setStats({
          contributions: user.contributionsCollection.contributionCalendar.totalContributions,
          repositories: user.repositories.totalCount,
          stars: repoStats.stars,
          forks: repoStats.forks,
          languages,
          contributionGraph: user.contributionsCollection.contributionCalendar.weeks
        })
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const getContributionColor = (count: number) => {
    if (count === 0) return '#1b2433'
    if (count <= 3) return '#0e4429'
    if (count <= 6) return '#006d32'
    if (count <= 9) return '#26a641'
    return '#39d353'
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border shadow-md"
      >
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-100 dark:bg-gray-800 rounded mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 h-24" />
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border shadow-md"
    >
      <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
          <Calendar className="w-5 h-5 mx-auto mb-2 text-green-600 dark:text-green-500" />
          <p className="text-2xl font-bold">{stats.contributions}</p>
          <p className="text-xs text-muted-foreground">Contributions</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
          <Code className="w-5 h-5 mx-auto mb-2 text-blue-600 dark:text-blue-500" />
          <p className="text-2xl font-bold">{stats.repositories}</p>
          <p className="text-xs text-muted-foreground">Repositories</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
          <Star className="w-5 h-5 mx-auto mb-2 text-yellow-600 dark:text-yellow-500" />
          <p className="text-2xl font-bold">{stats.stars}</p>
          <p className="text-xs text-muted-foreground">Stars</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
          <GitFork className="w-5 h-5 mx-auto mb-2 text-purple-600 dark:text-purple-500" />
          <p className="text-2xl font-bold">{stats.forks}</p>
          <p className="text-xs text-muted-foreground">Forks</p>
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-3">Languages</h4>
      <div className="space-y-3">
        {stats.languages.map((language) => (
          <div key={language.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{language.name}</span>
              <span>{language.percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${language.percentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-2 rounded-full"
                style={{
                  background:
                    language.name === "JavaScript"
                      ? "#f7df1e"
                      : language.name === "TypeScript"
                        ? "#3178c6"
                        : language.name === "Python"
                          ? "#3776ab"
                          : language.name === "C++"
                            ? "#00599c"
                            : "#8b949e",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="w-full overflow-hidden rounded-lg">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=Atharva-Mendhulkar&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
            alt="GitHub Stats"
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

