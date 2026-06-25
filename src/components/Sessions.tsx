import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '../config/images'

const sessions = [
  {
    tag: 'In-Person',
    tagColor: 'bg-blue-50 text-blue-600',
    title: 'In-Person Consultation',
    description: 'Visit our clinic for face-to-face consultations with our specialists.',
    price: '$50',
    image: images.sessions.inPerson,
  },
  {
    tag: 'Specialist',
    tagColor: 'bg-rose-50 text-rose-600',
    title: 'Heart Treatment',
    description: 'Comprehensive cardiac care with advanced diagnostics and treatment plans.',
    price: '$120',
    image: images.sessions.heartTreatment,
  },
  {
    tag: 'Online Available',
    tagColor: 'bg-green-50 text-green-600',
    title: 'Follow-up Appointment',
    description: 'Online and in-person follow-up care to track your recovery progress.',
    price: '$30',
    image: images.sessions.followUp,
  },
]

export default function Sessions() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Consultation</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Medical Session
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed">
            Flexible consultation options tailored to your schedule and needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sessions.map((session, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-60px' })
            return (
              <motion.div
                key={session.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden h-48 sm:h-52">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${session.tagColor}`}>
                    {session.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{session.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{session.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{session.price}</span>
                    <a
                      href="#appointment"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold border border-primary-500 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-200"
                    >
                      Book Now <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
