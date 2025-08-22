import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = ({ activeSection, onSectionClick, sections }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const sectionNames = [
    'Home', 'Vision', 'Value', 'Technical', 'Investment', 'Success', 'Roadmap', 'Backup', 'Next Steps'
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-yugen-black/80 backdrop-blur-md border-b border-yugen-gray/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yugen-gold to-yugen-light rounded-lg flex items-center justify-center">
              <span className="text-yugen-black font-bold text-lg">HY</span>
            </div>
            <span className="text-xl font-serif font-semibold text-yugen-light">
              House of Yugen
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {sectionNames.map((name, index) => (
              <motion.button
                key={name}
                onClick={() => onSectionClick(index)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-yugen-gold ${
                  activeSection === index ? 'text-yugen-gold' : 'text-yugen-light/70'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {name}
                {activeSection === index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yugen-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-yugen-light hover:text-yugen-gold transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-yugen-dark border-t border-yugen-gray/20 overflow-hidden"
          >
            <div className="container-custom py-6">
              <div className="space-y-4">
                {sectionNames.map((name, index) => (
                  <motion.button
                    key={name}
                    onClick={() => {
                      onSectionClick(index)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 hover:text-yugen-gold hover:bg-yugen-gray/20 rounded-lg ${
                      activeSection === index ? 'text-yugen-gold bg-yugen-gray/20' : 'text-yugen-light/70'
                    }`}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
