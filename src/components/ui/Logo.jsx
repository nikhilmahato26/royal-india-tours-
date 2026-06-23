import { Link } from 'react-router-dom'
import { Crown } from 'lucide-react'
import { site } from '../../data/site'

export default function Logo({ light = false, compact = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={site.name}>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient shadow-gold">
        <Crown className="h-5 w-5 text-navy" strokeWidth={2.2} />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl font-semibold tracking-wide ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            Royal India
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-luxe text-gold">
            Tours
          </span>
        </span>
      )}
    </Link>
  )
}
