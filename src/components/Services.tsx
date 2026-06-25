import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Stethoscope, Scissors, Smile, FlaskConical, Heart, ClipboardList, ArrowRight } from 'lucide-react'
import { images } from '../config/images'

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkup',
    description: 'Comprehensive health screenings and preventive care for your overall wellness.',
    image: images.services.generalCheckup,
  },
  {
    icon: Scissors,
    title: 'Immediate Surgery',
    description: 'Expert surgical team providing urgent and planned procedures with advanced technology.',
    image: images.services.surgery,
  },
  {
    icon: Smile,
    title: 'Dental Care',
    description: 'Complete dental services from routine cleanings to advanced cosmetic procedures.',
    image: images.services.dentalCare,
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Service',
    description: 'Accurate diagnostics and testing with state-of-the-art laboratory equipment.',
    image: images.services.laboratory,
  },
  {
    icon: Heart,
    title: 'Primary Care',
    description: 'Ongoing healthcare management and personalized treatment plans for chronic conditions.',
    image: images.services.primaryCare,
  },
  {
    icon: ClipboardList,
    title: 'Chronic Disease',
    description: 'Specialized management and support for diabetes, hypertension, and heart conditions.',
    image: images.services.chronicDisease,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden h-48 sm:h-52">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
          <service.icon className="w-5 h-5 text-primary-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
        <a
          href="#appointment"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:gap-3 transition-all duration-200"
        >
          Learn More <ArrowRight size={15} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">What We Offer</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Our Medical Services
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed to meet all your needs with
            state-of-the-art facilities.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
