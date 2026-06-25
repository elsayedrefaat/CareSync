import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { images } from '../config/images'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.hero.clinicInterior}
          alt="Modern clinic interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/55 to-gray-900/20" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4"
          >
            Trusted Medical Care
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            We Are Ready to Help Your{' '}
            <span className="text-primary-400">Health</span> Problems
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed"
          >
            Providing world-class healthcare with compassion. Our team of expert doctors
            is committed to your well-being with personalized treatment plans.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-primary-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-600 active:scale-95 transition-all shadow-lg shadow-primary-500/30"
            >
              <Calendar size={18} />
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-xl border border-white/30 hover:bg-white/25 active:scale-95 transition-all"
            >
              Our Services
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Emergency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
          className="absolute bottom-16 right-4 sm:right-8 lg:right-12 hidden sm:flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0"
          />
          <div>
            <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">
              24/7 Emergency
            </p>
            <p className="text-sm font-bold text-white">Available Now</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
