import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import SchoolIntro from './Components/SchoolIntro/SchoolIntro'
import Hero from './Components/Hero/Hero'
import Infrastructure from './Components/infrastructureData/infrastructureData'
import InfoCards from './Components/InfoCards/InfoCards'
import AboutSchool from './Components/AboutSchool/AboutSchool'
import AboutPrincipal from './Components/AboutPrincipal/AboutPrincipal'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/><br /> <br />
      <Hero/>
      {/* <SchoolIntro/> */}
      <Infrastructure/>
      <InfoCards/>
      <AboutSchool/>
      <AboutPrincipal/>
      <Footer/>
    </div>
  )
}

export default App 
