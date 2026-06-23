import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'
import { fadeUp, viewportOnce } from '../../utils/animations'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Decorative imagery backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-midnight/85" />
        <div className="bg-grain absolute inset-0 opacity-40" />
      </div>

      <div className="container-luxe">
        <SectionHeading
          light
          eyebrow="Guest Stories"
          title="Loved by Royal Travellers"
          subtitle="Real journeys, real memories — straight from the hearts of our guests."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            className="!pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="glass flex h-full flex-col rounded-3xl p-8">
                  <Quote className="h-10 w-10 text-gold/60" />
                  <div className="mt-4 flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/80">
                    “{t.review}”
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full border-2 border-gold/50 object-cover"
                    />
                    <div>
                      <p className="font-serif text-lg font-semibold text-white">{t.name}</p>
                      <p className="text-xs uppercase tracking-wider text-gold">
                        {t.destination}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
