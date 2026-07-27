import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Courses from '@/components/courses'
import Features from '@/components/features'
import News from '@/components/news'
import Testimonials from '@/components/testimonials'
import Statistics from '@/components/statistics'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Azure from '@/components/azure'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Statistics />
      <News />
      <Testimonials />
      <Gallery />
      <Contact />
      <Azure />
      <Footer />
    </main>
  )
}
