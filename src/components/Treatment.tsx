import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { images } from '../config/images'

const features = [
  'Comprehensive health assessment',
  'Personalized medication plans',
  'Ongoing monitoring and support',
  'Access to specialist referrals',
]

export default function Treatment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge">Personalized Care</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Need a Custom Treatment?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our specialists create tailored treatment plans based on your unique medical
              history and needs.
            </p>

            <ul className="mt-6 space-y-4">
              {features.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.45 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-50 rounded-full flex items-center justify-center">
                    <Check size={13} className="text-primary-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-gray-700 font-medium">{feat}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#appointment"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="mt-8 inline-flex items-center gap-2 bg-primary-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-600 active:scale-95 transition-all shadow-lg shadow-primary-200"
            >
              Contact Us <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-50 rounded-2xl -z-10" />
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src={images.treatment.consultation}
                alt="Custom treatment consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
