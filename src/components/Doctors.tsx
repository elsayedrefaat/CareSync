import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Twitter, Linkedin, Mail } from 'lucide-react'
import { images } from '../config/images'

const doctors = [
  { name: 'Dr. Sarah Johnson', role: 'Cardiologist',    rating: 4.9, reviews: 128, img: images.doctors.sarah },
  { name: 'Dr. Mark Williams', role: 'General Surgeon', rating: 4.8, reviews: 214, img: images.doctors.mark  },
  { name: 'Dr. Emily Chen',    role: 'Pediatrician',    rating: 5.0, reviews: 97,  img: images.doctors.emily },
  { name: 'Dr. Ahmed Hassan',  role: 'Dentist',         rating: 4.7, reviews: 183, img: images.doctors.ahmed },
]

export default function Doctors() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Our Team</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Meet Our Doctors
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed">
            Highly qualified and experienced medical professionals dedicated to your health.
          </p>
        </motion.div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-60px' })
            return (
              <motion.div
                key={doc.name}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Photo */}
                <div className="relative overflow-hidden h-56 bg-gray-100">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Social links overlay */}
                  <div className="absolute inset-0 bg-primary-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {[Twitter, Linkedin, Mail].map((Icon, j) => (
                      <motion.a
                        key={j}
                        href="#"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-primary-600 hover:text-primary-800 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Icon size={15} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{doc.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mt-0.5">{doc.role}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-900">{doc.rating}</span>
                    <span className="text-xs text-gray-400">({doc.reviews} reviews)</span>
                  </div>
                  <a
                    href="#appointment"
                    className="mt-4 block text-center text-sm font-semibold border border-primary-200 text-primary-600 py-2 rounded-lg hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200"
                  >
                    Book Session
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
