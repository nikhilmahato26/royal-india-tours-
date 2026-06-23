import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Clock, ArrowRight, Globe2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { internationalPackages } from '../../data/packages'
import { fadeUp, viewportOnce } from '../../utils/animations'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function InternationalPackages() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28">
      <div className="bg-grain absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-luxe relative">
        <SectionHeading
          light
          eyebrow="International Holidays"
          title="The World, Royally Yours"
          subtitle="Cross borders in comfort with our exclusive international holiday collections."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.15}
            centeredSlides={false}
            grabCursor
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1 },
            }}
            className="!pb-16"
          >
            {internationalPackages.map((pkg) => (
              <SwiperSlide key={pkg.name}>
                <article className="group relative h-[26rem] overflow-hidden rounded-3xl shadow-luxe">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/25 to-transparent" />

                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    <Globe2 className="h-3.5 w-3.5 text-gold" /> {pkg.tag}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="flex items-center gap-1.5 text-xs text-white/70">
                      <Clock className="h-3.5 w-3.5 text-gold" /> {pkg.nights}
                    </p>
                    <h3 className="mt-1.5 font-serif text-3xl font-semibold text-white">
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
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-navy transition-transform duration-300 group-hover:translate-x-1"
                        aria-label={`Book ${pkg.name}`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
