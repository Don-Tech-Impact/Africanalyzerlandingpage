"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import UseCases from "@/components/use-cases"
import Team from "@/components/team"
import Pricing from "@/components/pricing"
import EmailCapture from "@/components/email-capture"
import Footer from "@/components/footer"
import RequestAccessModal from "@/components/request-access-modal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <Navigation onRequestAccess={() => setModalOpen(true)} />
      <Hero onRequestAccess={() => setModalOpen(true)} />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <UseCases />
      <Team />
      <Pricing />
      <EmailCapture />
      <Footer />
      <RequestAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
