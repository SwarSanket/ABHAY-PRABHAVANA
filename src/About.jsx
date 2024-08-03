import React from 'react'
import Header from './Header'
import AmarPreranaTrust from './components/about/AmarPreranaTrust' 
import VerticalsSection from './components/about/VerticalsSection'
import FoundersAndTrustees from './components/about/FoundersAndTrustees'
import CTA from './Cta'
import Footer from './Footer'
import Tradition from './components/about/Tradition'
import Legacy from './components/about/Legacy'

export default function About() {
  return (

        
    <div>
    <Header /> 
    <AmarPreranaTrust />
    <VerticalsSection />
    <FoundersAndTrustees />
    <Tradition />
    <Legacy />
    <CTA />
    <Footer />

     
    </div>
  )
}
