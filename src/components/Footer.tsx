import { Heart, Twitter, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const links = {
  Company: ['About Us', 'Our Team', 'Careers', 'News & Blog'],
  Services: ['General Checkup', 'Surgery', 'Dental Care', 'Laboratory'],
  Support: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
}

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">
                Care<span className="text-primary-400">Sync</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Providing world-class healthcare with compassion and innovation for over 15 years.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CareSync. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
