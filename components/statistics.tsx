'use client'

import { useState, useEffect } from 'react'

interface Stat {
  label: string
  value: number
  suffix: string
}

const stats: Stat[] = [
  { label: 'Students', value: 5000, suffix: '+' },
  { label: 'Faculty Members', value: 150, suffix: '+' },
  { label: 'Programmes', value: 25, suffix: '+' },
  { label: 'Graduate Employment Rate', value: 95, suffix: '%' },
]

export default function Statistics() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      let current = 0
      const increment = stat.value / 50 // Animate over 50 steps
      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(intervals[index])
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, 30)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  return (
    <section id="statistics" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100">
            By the numbers, see what we have achieved
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {counts[index]?.toLocaleString()}
                {stat.suffix}
              </div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
