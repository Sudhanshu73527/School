import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import SchoolIntro from './Components/SchoolIntro/SchoolIntro'
import Hero from './Components/Hero/Hero'
import Infrastructure from './Components/infrastructureData/infrastructureData'
// import InfoCards from './Components/InfoCards/InfoCards'
import AboutSchool from './Components/AboutSchool/AboutSchool'
import AboutPrincipal from './Components/AboutPrincipal/AboutPrincipal'
import Footer from './Components/Footer/Footer'
// import Testimonials from './Components/Testimonials/Testimonials'
import FAQ from './Components/FAQ/FAQ'
import SchoolFeatures from './Components/SchoolFeatures/SchoolFeatures'
// import WhatWeProvide from './Components/Whatweprovide/Whatweprovide'
import UpcomingEvents from './Components/Upcomeingevents/Upcomeingevents'
// import SchoolSections from './Components/schoolsections/schoolsection'
// import OurFacilities from './Components/Ourfacilities/Ourfacilities'
// import OurSchoolGlimpses from './Components/OurSchoolGlimpses/OurSchoolGlimpses'
import RCISSection from './Components/RCISSection/RCISSection'
import Mission from './Components/Mission/Mission'
import Classroom from './Components/Classroom/Classroom'
import Principal from './Components/Principal/Principal'
import Noticeboard from './Components/Noticeborad/Noticeboard'
// import NoticeBoard from './Components/NoticeBoard/NoticeBoard'
// import SchoolHighlight from './Components/SchoolHighlight/SchoolHighlight'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      {/* <NoticeBoard/> */}
      {/* <SchoolHighlight/> */}
      {/* <SchoolIntro/> */}
      {/* <InfoCards/> */}
      <AboutSchool/>
      <Noticeboard/>
      <AboutPrincipal/>
      <Principal/>
      <Mission/>
      <Classroom/>
       <RCISSection/>
      {/* <WhatWeProvide/> */}
      <SchoolFeatures/>
      <UpcomingEvents/>
      {/* <SchoolSections/> */}
      {/* <OurFacilities/> */}
      {/* <OurSchoolGlimpses/> */}
      <Infrastructure/>
      <FAQ/>
      {/* <Testimonials/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App 
