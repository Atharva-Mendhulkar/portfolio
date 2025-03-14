"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Circle } from "lucide-react"

interface LeetCodeStats {
  success: boolean;
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

export default function LeetCodeStats() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
    totalSolved: 0,
    acceptanceRate: 0,
    ranking: 0
  });

  useEffect(() => {
    async function fetchLeetCodeStats() {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/mendhu36')
        const data: LeetCodeStats = await response.json()
        
        if (data.status === "success") {
          setStats({
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
            totalSolved: data.totalSolved,
            acceptanceRate: data.acceptanceRate,
            ranking: data.ranking
          })
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLeetCodeStats()
  }, [])

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
      >
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-800 rounded mb-4" />
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-4 h-24" />
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
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
    >
      <h3 className="text-xl font-bold mb-4">LeetCode Progress</h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-400">Easy</p>
          <p className="text-2xl font-bold text-green-500">{stats.easy}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-400">Medium</p>
          <p className="text-2xl font-bold text-yellow-500">{stats.medium}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-400">Hard</p>
          <p className="text-2xl font-bold text-red-500">{stats.hard}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-sm text-gray-400">Total Problems Solved</p>
          <p className="text-2xl font-bold">{stats.totalSolved}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-sm text-gray-400">Acceptance Rate</p>
          <p className="text-2xl font-bold">{stats.acceptanceRate.toFixed(1)}%</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-sm text-gray-400">Global Ranking</p>
          <p className="text-2xl font-bold">#{stats.ranking.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
  )
}

