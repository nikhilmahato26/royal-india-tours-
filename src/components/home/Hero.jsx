import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, Plane, Star } from 'lucide-react'
import { site } from '../../data/site'

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { scrollY } = useScroll()
  const yTajSlow = useTransform(scrollY, [0, 600], [0, 80])
  const yFast = useTransform(scrollY, [0, 600], [0, -60])

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-gradient">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" />
      <div className="bg-grain absolute inset-0 opacity-50" />

      <div className="container-luxe relative grid min-h-screen items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:gap-8 lg:pt-24">
        {/* ===== Left ===== */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-6"
          >
            <span className="h-px w-8 bg-gold" />
            {site.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="heading-serif text-5xl !text-white sm:text-6xl lg:text-7xl"
          >
            Explore India
            <br />
            <span className="text-gradient-gold">& The World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-6 max-w-md text-lg text-white/70"
          >
            Domestic & International tour packages, crafted with royal
            attention to detail for the discerning traveller.
          </motion.p>

          {/* Luxury offer card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="glass mt-8 inline-flex items-center gap-5 rounded-2xl px-6 py-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
              <Sparkles className="h-6 w-6 text-navy" />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-luxe text-gold">
                Special Launch Offer
              </p>
              <p className="font-serif text-2xl font-semibold text-white">
                Up to 20% Off
              </p>
              <p className="text-xs text-white/60">On selected tour packages</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/contact" className="btn-gold group">
              Book Your Dream Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/packages" className="btn-outline">
              Explore Packages
            </Link>
          </motion.div>
        </div>

        {/* ===== Right collage ===== */}
        <div className="relative hidden h-[560px] lg:block">
          {/* Taj Mahal — large */}
          <motion.div
            style={{ y: yTajSlow }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
            className="absolute left-0 top-4 h-80 w-64 overflow-hidden rounded-3xl shadow-luxe"
          >
            <img
              src={img('photo-1564507592333-c60657eea523')}
              alt="Taj Mahal"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Hawa Mahal */}
          <motion.div
            style={{ y: yFast }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="absolute right-2 top-0 h-56 w-52 overflow-hidden rounded-3xl shadow-luxe"
          >
            <img
              src={img('photo-1599661046289-e31897846e41')}
              alt="Hawa Mahal, Jaipur"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* India Gate / luxury travelers */}
          <motion.div
            style={{ y: yTajSlow }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="absolute bottom-0 right-6 h-64 w-60 overflow-hidden rounded-3xl shadow-luxe"
          >
            <img
              src={img('photo-1587474260584-136574528ed5')}
              alt="India Gate, Delhi"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Floating glass rating chip */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute bottom-20 left-2 z-10 flex items-center gap-3 rounded-2xl px-5 py-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">4.9 / 5.0</p>
              <p className="text-[0.65rem] text-white/60">5000+ travellers</p>
            </div>
          </motion.div>

          {/* Floating airplane */}
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 top-1/2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient shadow-gold"
          >
            <Plane className="h-7 w-7 text-navy" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  )
}
