import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero_2 from './components/Hero_2'
import Content from './components/Content'
import Projects from './components/Projects'
import Teams from './components/Teams'
import Submit from './components/Submit'
import About from './components/About'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Hero_2/>
      <Content/>
      <Projects/>
      <Teams/>
      <Submit/>
      <About/>
    </div>
  )
}

export default App