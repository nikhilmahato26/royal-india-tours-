import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { site } from '../../data/site'
import { fadeUp, viewportOnce } from '../../utils/animations'

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: site.phone, href: `tel:${site.phoneIntl}` },
  { icon: Mail, label: 'Email Us', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Visit Us', value: 'New Delhi, India' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sun · 24×7 Support' },
]

const field =
  'w-full rounded-xl border border-navy/15 bg-white px-4 py-3.5 text-sm text-navy outline-none transition-colors duration-300 placeholder:text-navy/35 focus:border-gold'
const labelCls = 'mb-1.5 block text-xs font-medium uppercase tracking-wider text-navy/60'
const errCls = 'mt-1 text-xs text-red-500'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = async (data) => {
    // Simulate async submission; wire to API/email service in production
    await new Promise((r) => setTimeout(r, 900))
    const msg = `New booking enquiry from ${data.fullName}%0APhone: ${data.phone}%0AEmail: ${data.email}%0ADestination: ${data.destination}%0ATravel Date: ${data.travelDate}%0AMessage: ${data.message || '—'}`
    window.open(`${site.whatsapp}?text=${msg}`, '_blank')
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="relative bg-beige py-24 sm:py-28">
      <div className="bg-grain absolute inset-0 opacity-40" />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Start Your Journey"
          title="Let's Plan Your Escape"
          subtitle="Share a few details and our travel designers will craft a bespoke itinerary just for you."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl bg-navy-gradient p-9 text-white shadow-luxe sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
            <h3 className="relative font-serif text-3xl font-semibold">
              Contact Details
            </h3>
            <p className="relative mt-3 text-sm text-white/60">
              Reach out any time — our concierge replies within minutes.
            </p>

            <div className="relative mt-9 space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <c.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="text-base text-white hover:text-gold">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-base text-white">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-navy/5 bg-white p-9 shadow-card sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls}>Full Name</label>
                <input
                  className={field}
                  placeholder="Your full name"
                  {...register('fullName', { required: 'Name is required' })}
                />
                {errors.fullName && <p className={errCls}>{errors.fullName.message}</p>}
              </div>

              <div>
                <label className={labelCls}>Phone Number</label>
                <input
                  className={field}
                  placeholder="Your phone number"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[0-9+\s-]{7,15}$/, message: 'Enter a valid phone' },
                  })}
                />
                {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
              </div>

              <div>
                <label className={labelCls}>Email Address</label>
                <input
                  className={field}
                  placeholder="you@email.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                  })}
                />
                {errors.email && <p className={errCls}>{errors.email.message}</p>}
              </div>

              <div>
                <label className={labelCls}>Destination</label>
                <input
                  className={field}
                  placeholder="e.g. Kashmir, Dubai"
                  {...register('destination', { required: 'Destination is required' })}
                />
                {errors.destination && (
                  <p className={errCls}>{errors.destination.message}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className={labelCls}>Travel Date</label>
                <input
                  type="date"
                  className={field}
                  {...register('travelDate', { required: 'Travel date is required' })}
                />
                {errors.travelDate && (
                  <p className={errCls}>{errors.travelDate.message}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className={labelCls}>Message</label>
                <textarea
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="Tell us about your dream trip…"
                  {...register('message')}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold mt-7 w-full disabled:opacity-60"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Enquiry Sent!
                </>
              ) : isSubmitting ? (
                'Sending…'
              ) : (
                <>
                  Book My Journey <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
