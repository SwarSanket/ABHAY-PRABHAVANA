import React from 'react'
import Header from '../header-footer/Header'
import Heading from './Indoor/Heading'
import Map from '../jouneryoptions/Jounery option 1/Map'

import Part1 from './Indoor/Part1'
import Part2 from './Indoor/Part2'
import Part3 from './Indoor/Part3'
import Part4 from './Indoor/Part4'

import RishabhdevSection from './Outdoor/RishabhdevSection'
import Heritage from './Outdoor/Heritage'
import Plaza from './Outdoor/Plaza'
import Gardern from './Outdoor/Gardern'
import Mandal from './Outdoor/Mandal'
import Manastambh from './Outdoor/Manastambh'
import Cta from "../../components/Home/Cta"
import Footer from "../../components/header-footer/FooterNew"
import StickyButton from "../../components/Home/StickyButton"


function Expriences() {
  return (

    <div>
    <Header/>
    <Heading/>
    <Map/>
   
    <Part1/>
    <Part2/>
    <Part3/>
    <Part4/>

    {/* OutDoor */}

    <RishabhdevSection/>
    <Heritage/>
    <Plaza/>
    <Gardern/>
    <Mandal/>
    <Manastambh/>

<StickyButton/>

    <Cta/>
    <Footer/>
   

    </div>
  )
}

export default Expriences