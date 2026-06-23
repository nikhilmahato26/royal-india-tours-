import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import MobileMenu from './MobileMenu'
import useScrolled from '../../hooks/useScrolled'
import { navLinks, site } from '../../data/site'

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 py-3 shadow-[0_10px_40px_-20px_rgba(7,20,38,0.4)] backdrop-blur-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-luxe flex items-center justify-between">
          <Logo light={!scrolled} hasBg={true} />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    } ${
                      scrolled
                        ? 'text-navy hover:text-gold'
                        : 'text-white/90 hover:text-gold'
                    } ${isActive ? '!text-gold' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneIntl}`}
              className={`hidden items-center gap-2 text-sm font-medium md:flex ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              <Phone className="h-4 w-4 text-gold" />
              {site.phone}
            </a>
            <Link
              to="/contact"
              className="hidden rounded-full bg-gold-gradient px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy shadow-gold transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Book Now
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
                scrolled
                  ? 'border-navy/15 text-navy'
                  : 'border-white/30 text-white'
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
