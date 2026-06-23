import { motion } from 'framer-motion'
import { Gem, HeartHandshake, Compass, Award } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

const values = [
  { icon: Gem, title: 'Uncompromising Luxury', desc: 'Every stay, transfer and experience meets the highest standard.' },
  { icon: HeartHandshake, title: 'Personal Touch', desc: 'Itineraries tailored to your story, not a template.' },
  { icon: Compass, title: 'Expert Guidance', desc: 'Seasoned travel designers who know every destination intimately.' },
  { icon: Award, title: 'Proven Excellence', desc: 'Thousands of five-star journeys and counting.' },
]

export default function About() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Our Story"
        title="About Royal India Tours"
        subtitle="A luxury travel house devoted to crafting journeys as remarkable as the destinations themselves."
        crumb="About"
        image="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Intro */}
      <section className="py-24 sm:py-28">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury travel in India"
                className="h-[34rem] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass-dark absolute -bottom-6 -right-6 hidden rounded-2xl px-8 py-6 text-center sm:block">
              <p className="font-serif text-4xl font-semibold text-gold">10+</p>
              <p className="text-xs uppercase tracking-wider text-white/70">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Travel, Reimagined Royally"
            />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 space-y-5 text-navy/65"
            >
              <p>
                At Royal India Tours, we believe travel should feel effortless,
                indulgent and deeply personal. Born from a passion for India's
                timeless heritage and the world's most breathtaking destinations,
                we craft journeys that turn into lifelong memories.
              </p>
              <p>
                From the marble splendour of the Taj Mahal to the glittering
                skylines of Dubai, every itinerary is shaped by our travel
                designers with handpicked hotels, private transfers and curated
                experiences — all backed by round-the-clock concierge support.
              </p>
              <p className="font-serif text-xl italic text-navy">
                “We don't just plan trips. We create memories worthy of royalty.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige/40 py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our Values"
            title="What Sets Us Apart"
            subtitle="The principles behind every royal journey we design."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-navy/5 bg-white p-8 text-center shadow-card transition-shadow hover:shadow-luxe"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient">
                  <v.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-navy/55">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
    </PageTransition>
  )
}
