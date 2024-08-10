import React from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Section/>
      <Aside/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default App
