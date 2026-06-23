import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, MapPin } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import InternationalPackages from '../components/home/InternationalPackages'
import { domesticPackages } from '../data/packages'
import { staggerContainer, fadeUp, viewportOnce } from '../utils/animations'

export default function Packages() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Curated Journeys"
        title="Tour Packages"
        subtitle="Handcrafted domestic and international holidays, designed around the way you love to travel."
        crumb="Packages"
        image="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Domestic */}
      <section className="py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Domestic Escapes"
            title="Explore Incredible India"
            subtitle="Snow valleys, royal forts, serene backwaters and golden beaches."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {domesticPackages.map((pkg) => (
              <motion.article
                key={pkg.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-card transition-shadow hover:shadow-luxe"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-navy">
                    {pkg.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-xs text-navy/50">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {pkg.name}, India
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold text-navy">
                    {pkg.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-navy/50">
                    <Clock className="h-3.5 w-3.5 text-gold" /> {pkg.nights}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-5">
                    <p className="text-sm text-navy/50">
                      From{' '}
                      <span className="font-serif text-xl font-semibold text-navy">
                        {pkg.price}
                      </span>
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-gold"
                    >
                      Book <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* International (reuse home carousel) */}
      <InternationalPackages />
    </PageTransition>
  )
}
