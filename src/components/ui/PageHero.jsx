import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Reusable inner-page banner with title + breadcrumb
export default function PageHero({ eyebrow, title, subtitle, image, crumb }) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-navy-gradient pt-24">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/40" />
        <div className="bg-grain absolute inset-0 opacity-40" />
      </div>

      <div className="container-luxe relative py-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mx-auto mb-5 justify-center"
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-serif text-5xl !text-white sm:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 max-w-xl text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-7 flex items-center justify-center gap-2 text-sm text-white/60"
        >
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-4 w-4 text-gold" />
          <span className="text-gold">{crumb || title}</span>
        </motion.nav>
      </div>
    </section>
  )
}
