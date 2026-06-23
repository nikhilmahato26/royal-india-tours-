import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { domesticPackages } from '../../data/packages'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations'

export default function DomesticPackages() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Domestic Escapes"
          title="Discover Incredible India"
          subtitle="From snow-clad valleys to sun-kissed shores — handcrafted journeys across the subcontinent."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid auto-rows-[20rem] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {domesticPackages.map((pkg, i) => (
            <motion.article
              key={pkg.name}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${
                i === 0 ? 'sm:col-span-2 sm:row-span-1 lg:row-span-2' : ''
              }`}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/30 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-gold-gradient px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-navy">
                {pkg.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="flex items-center gap-1.5 text-xs text-white/70">
                  <Clock className="h-3.5 w-3.5 text-gold" /> {pkg.nights}
                </p>
                <h3 className="mt-1.5 font-serif text-2xl font-semibold text-white">
                  {pkg.name}
                </h3>
                <p className="text-sm text-white/70">{pkg.title}</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-white/60">
                    From{' '}
                    <span className="font-serif text-xl font-semibold text-gold">
                      {pkg.price}
                    </span>
                  </p>
                  <Link
                    to="/contact"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-navy"
                    aria-label={`Book ${pkg.name}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
