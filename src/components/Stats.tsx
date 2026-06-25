import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Expert Doctors' },
  { value: 10000, suffix: '+', label: 'Happy Patients', display: '10k+' },
  { value: 24, suffix: '/7', label: 'Emergency Support', display: '24/7' },
]

function CountUp({ target, display }: { target: number; display?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || display) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, display])

  return <span ref={ref}>{display ?? count}</span>
}

export default function Stats() {
  return (
    <section className="bg-primary-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${
                i < stats.length - 1 ? 'lg:border-r border-white/20' : ''
              }`}
            >
              <p className="font-display text-3xl sm:text-4xl font-bold text-white">
                <CountUp target={stat.value} display={stat.display} />
                {!stat.display && <span>{stat.suffix}</span>}
              </p>
              <p className="mt-1 text-sm text-white/75 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
