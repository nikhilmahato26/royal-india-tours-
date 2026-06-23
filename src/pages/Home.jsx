import PageTransition from '../components/ui/PageTransition'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import WhyChooseUs from '../components/home/WhyChooseUs'
import DomesticPackages from '../components/home/DomesticPackages'
import InternationalPackages from '../components/home/InternationalPackages'
import Testimonials from '../components/home/Testimonials'
import InstagramGallery from '../components/home/InstagramGallery'
import FAQ from '../components/home/FAQ'
import ContactForm from '../components/home/ContactForm'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <FeaturedDestinations />
      <WhyChooseUs />
      <DomesticPackages />
      <InternationalPackages />
      <Testimonials />
      <InstagramGallery />
      <FAQ />
      <ContactForm />
    </PageTransition>
  )
}
