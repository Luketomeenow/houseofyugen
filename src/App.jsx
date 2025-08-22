import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Vision from './components/Vision'
import ValueEquation from './components/ValueEquation'
import TechnicalFoundation from './components/TechnicalFoundation'
import InvestmentStructure from './components/InvestmentStructure'
import SuccessMetrics from './components/SuccessMetrics'
import Roadmap from './components/Roadmap'
import BackupPlan from './components/BackupPlan'
import NextSteps from './components/NextSteps'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll()
  
  const sections = [
    'hero', 'vision', 'value', 'technical', 'investment', 'success', 'roadmap', 'backup', 'next'
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionHeight = windowHeight * 0.8
      
      const currentSection = Math.floor(scrollPosition / sectionHeight)
      setActiveSection(Math.min(currentSection, sections.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionIndex) => {
    const element = document.getElementById(sections[sectionIndex])
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-yugen-black">
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
        sections={sections}
      />
      
      <main>
        <Hero />
        <Vision />
        <ValueEquation />
        <TechnicalFoundation />
        <InvestmentStructure />
        <SuccessMetrics />
        <Roadmap />
        <BackupPlan />
        <NextSteps />
      </main>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yugen-gold to-yugen-light z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </div>
  )
}

export default App
