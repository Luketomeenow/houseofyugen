import React, { useState, useEffect, useRef } from 'react'
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
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Section is active when 20% from top and 70% from bottom
      threshold: 0
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const sectionIndex = sections.indexOf(sectionId)
          if (sectionIndex !== -1) {
            setActiveSection(sectionIndex)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)
    
    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections])

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
