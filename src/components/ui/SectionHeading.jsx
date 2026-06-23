import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/animations'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {eyebrow && (
        <span className="eyebrow mb-4">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`heading-serif text-4xl sm:text-5xl ${
          light ? '!text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-navy/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
