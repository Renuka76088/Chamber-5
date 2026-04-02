import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'
import Pageheader from './Components/Pageheader'
import About from './Pages/About'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import Carrer from './Pages/Carrer'
import Contact from './Pages/Contact'
import Associates from './Pages/Associates'
import MembershipPage from './Pages/MembershipPage'
import Enquiry from './Pages/Enquiry'
import QuotationSection from './Pages/QuotationSection'
import AuctionSection from './Pages/AuctionSection'
import TenderSection from './Pages/TenderSection'
import CircularPage from './Pages/CircularPage'
import AppointmentPage from './Pages/AppointmentPage'
import NoticeBoard from './Pages/NoticeBoard'
import MediaGallery from './Pages/MediaGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Pageheader/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/career" element={<Carrer/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/textile" element={<Associates/>} />
          <Route path="/our-chamber-management" element={<MembershipPage/>} />
          <Route path="/trade-enquiry-" element={<Enquiry/>} />
          <Route path="/e-quotation-" element={<QuotationSection/>} />
          <Route path="/e-auction-" element={< AuctionSection/>} />
          <Route path="/tender-&-contract" element={< TenderSection/>} />
          <Route path="/circular" element={< CircularPage/>} />
          <Route path="/visit-with-appointment-" element={<AppointmentPage/>} />
          <Route path="/notice-board" element={<NoticeBoard/>} />
          <Route path="/media-gallery" element={< MediaGallery/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </>
  )
}

export default App
