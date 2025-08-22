import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Crown, TrendingUp, Shield } from 'lucide-react'

const Vision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="vision" ref={ref} className="section-padding bg-yugen-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            The Vision: <span className="gradient-text">Own Your Luxury Digital Experience</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            Break free from third-party limitations and create a bespoke platform that perfectly aligns with your brand
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Current Limitations */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-semibold text-yugen-light mb-8">
              Current Limitations
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-yugen-black/50 border border-yugen-gray/20"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yugen-light mb-2">Platform Dependency</h4>
                  <p className="text-yugen-light/70">Reliance on third-party platforms like Eventista limits your control and branding opportunities</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-yugen-black/50 border border-yugen-gray/20"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yugen-light mb-2">Branding Constraints</h4>
                  <p className="text-yugen-light/70">Limited control over branding and user experience, diluting your luxury positioning</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-yugen-black/50 border border-yugen-gray/20"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yugen-light mb-2">Revenue Leakage</h4>
                  <p className="text-yugen-light/70">Platform fees and indirect payment flows reduce your profitability</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-semibold text-yugen-light mb-8">
              House of Yugen's Future
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-yugen-gold/10 border border-yugen-gold/20"
              >
                <div className="w-12 h-12 bg-yugen-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-yugen-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yugen-light mb-2">Bespoke Platform</h4>
                  <p className="text-yugen-light/70">Strengthen fan engagement with a luxury-grade, fully branded voting system</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-yugen-gold/10 border border-yugen-gold/20"
              >
                <div className="w-12 h-12 bg-yugen-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-yugen-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yugen-light mb-2">Direct Revenue Capture</h4>
                  <p className="text-yugen-light/70">Capture revenue directly, maximizing profitability and eliminating platform fees</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: -10 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-yugen-gold/10 border border-yugen-gold/20"
              >
                <div className="w-12 h-12 bg-yugen-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-yugen-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yugen-light mb-2">Full Ownership</h4>
                  <p className="text-yugen-light/70">Establish long-term ownership of user data and intellectual property rights</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <h4 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
              Ready to Transform Your Digital Experience?
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-2xl mx-auto">
              Join us in creating a luxury-grade platform that perfectly represents your brand and maximizes your revenue potential
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Explore Our Solution
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision
