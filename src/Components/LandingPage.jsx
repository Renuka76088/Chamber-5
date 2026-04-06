import React from 'react'
import Home from '../Pages/Home'
import ServicesEvents from '../Pages/ServicesEvents'
import CorporateMembers from '../Pages/CorporateMembers'

import NewsSection from '../Pages/NewsSection'
import ContactSection from '../Pages/ContactSection'
import AboutUs from '../Pages/AboutUs'
import Gallery from '../Pages/galleryImages'

function LandingPage() {
  return (
  <>
  <Home/>
  <AboutUs/>
<Gallery/>
  <CorporateMembers/>
  
  {/* < NewsSection/> */}
  <ContactSection/>
  
  </>
  )
}

export default LandingPage