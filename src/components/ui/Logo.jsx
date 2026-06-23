import { Link } from 'react-router-dom'
import { site } from '../../data/site'


export default function Logo({ light = false, compact = false, hasBg = false }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center transition-all duration-300 ${
        hasBg
          ? 'bg-midnight px-4 py-2 rounded-2xl border border-gold/15 shadow-[0_10px_30px_-15px_rgba(7,20,38,0.5)]'
          : ''
      }`}
      aria-label={site.name}
    >
      <img
        src="/logo.png"
        alt={site.name}
        className="h-12 sm:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
      />
    </Link>
  )
}


