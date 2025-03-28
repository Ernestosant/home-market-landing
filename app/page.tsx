import { ContactForm } from "@/components/contact-form"
import { CoreBusiness } from "@/components/core-business"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MissionVision } from "@/components/mission-vision"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MissionVision />
        <CoreBusiness />
        <Partners />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

