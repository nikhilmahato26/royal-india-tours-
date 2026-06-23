import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'
import Logo from '../ui/Logo'
import { navLinks, site } from '../../data/site'

const socials = [
  { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: site.social.twitter, label: 'Twitter' },
  { icon: Youtube, href: site.social.youtube, label: 'YouTube' },
]

const quickLinks = [
  ...navLinks,
  { label: 'Domestic Packages', to: '/packages' },
  { label: 'International Packages', to: '/packages' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="bg-grain absolute inset-0 opacity-60" />

      {/* WhatsApp CTA banner */}
      <div className="container-luxe relative">
        <div className="mt-[3rem] z-20 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gold-gradient px-8 py-10 text-navy shadow-gold sm:flex-row sm:px-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
              Ready to plan your royal escape?
            </h3>
            <p className="mt-1 text-sm text-navy/80">
              Chat with our travel concierge on WhatsApp — replies within minutes.
            </p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="container-luxe relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            Crafting bespoke luxury journeys across India and the world, with
            handpicked stays and effortless service at every step.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-luxe text-gold">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-luxe text-gold">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm text-white/65">
            <li>
              <a href={`tel:${site.phoneIntl}`} className="flex items-start gap-3 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 text-gold" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 text-gold" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" /> New Delhi, India
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-luxe text-gold">
            Newsletter
          </h4>
          <p className="text-sm text-white/60">
            Receive curated travel inspiration and exclusive offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder-white/40 outline-none"
            />
            <button className="bg-gold-gradient px-5 text-navy" aria-label="Subscribe">
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-base italic text-gold">
            {site.footerTagline}
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
