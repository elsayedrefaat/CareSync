import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Shield, Clock } from 'lucide-react'
import { images } from '../config/images'

const highlights = [
  { icon: Award, label: 'Certified Excellence', sub: 'ISO-certified facility' },
  { icon: Users, label: 'Multidisciplinary Team', sub: '50+ specialists on staff' },
  { icon: Shield, label: 'Patient Privacy', sub: 'HIPAA compliant' },
  { icon: Clock, label: 'Flexible Hours', sub: 'Open 7 days a week' },
]

const doctors = [
  { name: 'Dr. Sarah Johnson',  role: 'Cardiologist',  img: images.doctorsThumbs.sarah },
  { name: 'Dr. Mark Williams',  role: 'Surgeon',        img: images.doctorsThumbs.mark  },
  { name: 'Dr. Emily Chen',     role: 'Pediatrician',   img: images.doctorsThumbs.emily },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge">About Us</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-900">
              About Our Clinic Elsayed Refaat Clinic
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our clinic has been serving the community for over 15 years with a commitment to
              excellence in healthcare. We combine cutting-edge technology with compassionate care.
            </p>

            <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                To provide accessible, high-quality healthcare that puts patients first. We believe
                every person deserves personalized attention and the best medical treatment available.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <h.icon size={16} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{h.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{h.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image + doctors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={images.about.clinicTeam}
                alt="Our clinic team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating doctor avatars */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <div className="flex -space-x-2">
                {doctors.map((d) => (
                  <img
                    key={d.name}
                    src={d.img}
                    alt={d.name}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs text-gray-500">Our Specialists</p>
                <p className="text-sm font-bold text-gray-900">50+ Expert Doctors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
