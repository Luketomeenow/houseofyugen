import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Crown, Star, Zap } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const scrollToNext = () => {
    document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yugen-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yugen-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yugen-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif font-bold mb-8"
          >
            <span className="gradient-text">House of Yugen</span>
            <br />
            <span className="text-yugen-light">Custom Voting Platform</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-yugen-light/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your events with a luxury-grade, fully branded voting system that seamlessly integrates with your global reach
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center animate-glow">
                <Crown className="w-8 h-8 text-yugen-gold" />
              </div>
              <h3 className="text-lg font-semibold text-yugen-light">Luxury Branding</h3>
              <p className="text-yugen-light/70 text-sm">Fully branded platform that reflects your premium positioning</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center animate-glow" style={{ animationDelay: '0.5s' }}>
                <Zap className="w-8 h-8 text-yugen-gold" />
              </div>
              <h3 className="text-lg font-semibold text-yugen-light">Direct Revenue</h3>
              <p className="text-yugen-light/70 text-sm">Capture payments directly, maximizing your profitability</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center animate-glow" style={{ animationDelay: '1s' }}>
                <Star className="w-8 h-8 text-yugen-gold" />
              </div>
              <h3 className="text-lg font-semibold text-yugen-light">Data Ownership</h3>
              <p className="text-yugen-light/70 text-sm">Full ownership of user data and intellectual property</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View Full Proposal
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-yugen-gold text-yugen-gold font-semibold rounded-lg hover:bg-yugen-gold hover:text-yugen-black transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-yugen-light/60 hover:text-yugen-gold transition-colors"
          whileHover={{ y: 5 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
