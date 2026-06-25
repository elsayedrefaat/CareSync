import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, UserCheck } from 'lucide-react'
import { images } from '../config/images'

const doctors = ['Dr. Sarah Johnson', 'Dr. Mark Williams', 'Dr. Emily Chen', 'Dr. Ahmed Hassan']
const times = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export default function Appointment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge">Quick Booking</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Book Your Appointment
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Schedule your visit with our specialists. We will confirm your appointment
              within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+20 00 000-000"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Doctor */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Preferred Doctor
                </label>
                <div className="relative">
                  <UserCheck size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none bg-white">
                    <option value="">Select a doctor</option>
                    {doctors.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none bg-white">
                      <option value="">Select time</option>
                      {times.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-400 cursor-pointer"
                />
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                  I agree to the{' '}
                  <a href="#" className="text-primary-600 underline underline-offset-2">terms</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary-600 underline underline-offset-2">privacy policy</a>
                  {' '}of the clinic.
                </span>
              </label>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500'
                    : 'bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-200'
                }`}
              >
                {submitted ? '✓ Appointment Requested!' : 'Book Appointment'}
              </motion.button>
            </form>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src={images.appointment.doctorPortrait}
                alt="Doctor ready for appointment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-8 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0"
              />
              <div>
                <p className="text-xs text-gray-500 font-medium">Next Available</p>
                <p className="text-sm font-bold text-gray-900">Today, 3:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
