import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import {
  domesticDestinations,
  internationalDestinations,
} from '../../data/destinations'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations'

const tabs = [
  { key: 'domestic', label: 'Domestic', data: domesticDestinations },
  { key: 'international', label: 'International', data: internationalDestinations },
]

export default function FeaturedDestinations() {
  const [active, setActive] = useState('domestic')
  const current = tabs.find((t) => t.key === active)

  return (
    <section className="relative bg-beige/40 py-24 sm:py-28">
      <div className="container-luxe">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Where Will You Go Next?"
            subtitle="Iconic landscapes and timeless cities, each curated into an unforgettable royal experience."
          />

          {/* Tabs */}
          <div className="flex rounded-full border border-navy/10 bg-white p-1.5 shadow-card">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative rounded-full px-7 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  active === tab.key ? 'text-navy' : 'text-navy/50 hover:text-navy'
                }`}
              >
                {active === tab.key && (
                  <motion.span
                    layoutId="dest-tab"
                    className="absolute inset-0 rounded-full bg-gold-gradient"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {current.data.map((dest, i) => (
              <motion.article
                key={dest.name}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-3xl shadow-card ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-luxe text-gold">
                    <MapPin className="h-3.5 w-3.5" /> {current.label}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-semibold text-white">
                    {dest.name}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {dest.description}
                  </p>
                  <Link
                    to="/packages"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-gold"
                  >
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
