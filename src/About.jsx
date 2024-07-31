import React from 'react'
import Header from './Header'
import AboutAbhayPrabhavana from './components/about/AboutAbhayPrabhavana'
import MissionVision from './components/about/VisionMission'
import AmarPreranaTrust from './components/about/AmarPreranaTrust' 
import VerticalsSection from './components/about/VerticalsSection'
import FoundersAndTrustees from './components/about/FoundersAndTrustees'
import CTA from './Cta'
import Footer from './Footer'
import Tradition from './components/about/Tradition'

export default function About() {
  return (

        
    <div>
    <Header /> 
    <AboutAbhayPrabhavana />   
    <MissionVision />
    <AmarPreranaTrust />
    <VerticalsSection />
    <FoundersAndTrustees />
    <Tradition />

    <CTA />
    <Footer />

     
    </div>
  )
}
