import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations'

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Offer"
          title="Curated Travel Services"
          subtitle="Every detail of your journey, handled with the precision and warmth of a royal concierge."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-navy/5 bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-luxe"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient shadow-card transition-colors duration-300 group-hover:bg-gold-gradient">
                <service.icon className="h-7 w-7 text-gold transition-colors duration-300 group-hover:text-navy" />
              </div>

              <h3 className="relative mt-6 font-serif text-2xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-navy/55">
                {service.description}
              </p>

              <ul className="relative mt-5 space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-navy/70">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
