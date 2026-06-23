import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { gallery } from '../../data/gallery'
import { staggerContainer, scaleIn, viewportOnce } from '../../utils/animations'
import { site } from '../../data/site'

export default function InstagramGallery() {
  return (
    <section className="relative bg-beige/40 py-24 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="@royalindiatours"
          title="Travel Moments"
          subtitle="A glimpse into the breathtaking journeys we craft. Follow us for daily inspiration."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {gallery.map((g, i) => (
            <motion.a
              key={i}
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${
                g.span === 2 ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <img
                src={g.image}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-midnight/0 transition-colors duration-300 group-hover:bg-midnight/50">
                <Instagram className="h-7 w-7 scale-0 text-white transition-transform duration-300 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-navy"
          >
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
