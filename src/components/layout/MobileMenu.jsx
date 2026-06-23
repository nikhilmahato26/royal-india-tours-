import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Phone, Mail } from 'lucide-react'
import Logo from '../ui/Logo'
import { navLinks, site } from '../../data/site'

const panel = {
  hidden: { x: '100%' },
  show: { x: 0, transition: { type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
}

const list = {
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
}

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-midnight/60 backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            variants={panel}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-navy-gradient px-7 py-7 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo light />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.ul
              variants={list}
              initial="hidden"
              animate="show"
              className="mt-14 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <motion.li key={link.to} variants={item}>
                  <NavLink
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block border-b border-white/10 py-4 font-serif text-2xl transition-colors ${
                        isActive ? 'text-gold' : 'text-white hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-auto space-y-4 text-white/80">
              <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-gold" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
              <Link
                to="/contact"
                onClick={onClose}
                className="btn-gold mt-2 w-full"
              >
                Book Your Journey
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
