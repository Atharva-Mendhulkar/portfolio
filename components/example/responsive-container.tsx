import * as React from "react"
import { useIsMobile } from "../../hooks/use-mobile"

export function ResponsiveContainer() {
  const isMobile = useIsMobile()
  const [githubStats, setGithubStats] = React.useState<any>(null)

  React.useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`, {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        })
        const data = await response.json()
        setGithubStats(data)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      }
    }

    fetchGithubStats()
  }, [])

  return (
    <div style={{
      padding: isMobile ? '1rem' : '2rem',
      fontSize: isMobile ? '14px' : '16px',
      maxWidth: isMobile ? '100%' : '1200px',
      margin: '0 auto'
    }}>
      <h1>{isMobile ? 'Mobile View' : 'Desktop View'}</h1>
      {githubStats && (
        <div className="github-stats">
          <h2>GitHub Stats</h2>
          <p>Followers: {githubStats.followers}</p>
          <p>Public Repos: {githubStats.public_repos}</p>
          <p>Following: {githubStats.following}</p>
        </div>
      )}
      <p>This content adapts to your screen size!</p>
    </div>
  )
}
