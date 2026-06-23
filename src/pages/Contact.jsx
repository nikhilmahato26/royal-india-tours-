import PageTransition from '../components/ui/PageTransition'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/home/ContactForm'
import FAQ from '../components/home/FAQ'

export default function Contact() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Your royal journey begins with a single conversation. Let's make it unforgettable."
        crumb="Contact"
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
      />
      <ContactForm />
      <FAQ />
    </PageTransition>
  )
}
