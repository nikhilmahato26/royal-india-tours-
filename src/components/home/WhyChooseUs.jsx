import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BadgeIndianRupee,
  ShieldCheck,
  Hotel,
  Headset,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'

const features = [
  { icon: BadgeIndianRupee, title: 'Best Price Guarantee', desc: 'Premium experiences at honest, transparent pricing.' },
  { icon: ShieldCheck, title: 'Trusted Travel Experts', desc: 'A decade of crafting flawless luxury itineraries.' },
  { icon: Hotel, title: 'Handpicked Hotels', desc: 'Only the finest stays, personally vetted for you.' },
  { icon: Headset, title: '24×7 Customer Support', desc: 'A dedicated concierge, wherever you are in the world.' },
  { icon: Sparkles, title: 'Hassle-Free Travel', desc: 'Comfortable, seamless journeys from start to finish.' },
]

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Travelers' },
  { value: 100, suffix: '+', label: 'Destinations' },
  { value: 24, suffix: '×7', label: 'Support' },
  { value: 100, suffix: '%', label: 'Best Price' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1800
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setCount(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-4xl font-semibold text-gold sm:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-beige py-24 sm:py-28">
      <div className="bg-grain absolute inset-0 opacity-40" />
      <div className="container-luxe relative grid items-center gap-16 lg:grid-cols-2">
        {/* Left: features */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="The Royal Difference"
            subtitle="We don't just plan trips — we design memories that last a lifetime."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 space-y-5"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group flex items-start gap-5 rounded-2xl border border-navy/5 bg-white/60 p-5 backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-gradient transition-colors duration-300 group-hover:bg-gold-gradient">
                  <f.icon className="h-6 w-6 text-gold transition-colors duration-300 group-hover:text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy">{f.title}</h3>
                  <p className="mt-0.5 text-sm text-navy/55">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: stats card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 shadow-luxe sm:p-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
          <h3 className="relative font-serif text-3xl font-semibold text-white">
            Trusted by thousands of <span className="text-gradient-gold">royal travellers</span>
          </h3>
          <p className="relative mt-3 text-sm text-white/60">
            Numbers that reflect our commitment to extraordinary journeys.
          </p>

          <div className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-10">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-gold/40 pl-5">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 text-sm uppercase tracking-wider text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
