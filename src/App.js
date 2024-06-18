import React from 'react'
import Home from './PortfolioContainer/Home/Home'
import './App.css'
import { About } from './PortfolioContainer/Home/About'
import ExperienceSection from './PortfolioContainer/Home/Experience'

const App = () => {
  return (
    <div className='App'>
      <Home />
      <About />
      <ExperienceSection/>
    </div>
  )
}

export default App