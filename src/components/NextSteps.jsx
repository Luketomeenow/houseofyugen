import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Play, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

const NextSteps = () => {
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

  const timelineSteps = [
    {
      title: "Kickoff",
      description: "Prototype begins immediately upon deposit.",
      icon: Rocket
    },
    {
      title: "First Demo",
      description: "Delivered in 30-45 days.",
      icon: Play
    },
    {
      title: "Full Phased Rollout",
      description: "Followed by revisions, stress tests, branding, and soft launch.",
      icon: CheckCircle
    }
  ]

  return (
    <section id="next" ref={ref} className="section-padding bg-yugen-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-yugen-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yugen-light/5 rounded-full blur-3xl" />
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
            Next Steps: <span className="gradient-text">Let's Begin Your Digital Transformation</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            Choose the path that best fits your current situation and timeline
          </motion.p>
        </motion.div>

        {/* Two Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Option 1: Full Approval */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yugen-gold/10 to-yugen-gold/5 border border-yugen-gold/20 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-yugen-gold" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-2">
                  Option 1: Full Approval
                </h3>
              </div>
              
              <p className="text-yugen-light/80 mb-6 text-center">
                Approve the <span className="text-yugen-gold font-semibold">150,000 PHP</span> labour and project management fee for DSC's comprehensive DFY build.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Approve Full Build</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Option 2: Initial Deposit */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yugen-light/10 to-yugen-light/5 border border-yugen-gray/20 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yugen-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-yugen-light" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-2">
                  Option 2: Initial Deposit
                </h3>
              </div>
              
              <p className="text-yugen-light/80 mb-4 text-center">
                Begin with a <span className="text-yugen-light font-semibold">20,000 PHP</span> deposit (deducted from final cost) to:
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-yugen-light/80">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yugen-light rounded-full mt-2 flex-shrink-0" />
                  <span>Fund detailed scope of work & direct cost analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yugen-light rounded-full mt-2 flex-shrink-0" />
                  <span>Initiate prototype development</span>
                </li>
              </ul>
              
              <p className="text-yugen-light/70 text-sm mb-6 text-center">
                DSC delivers this scope + prototype for your review. Upon approval, we proceed to build a full demo.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 border-2 border-yugen-light text-yugen-light font-semibold rounded-lg hover:bg-yugen-light hover:text-yugen-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start with Deposit</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Project Timeline */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h3 className="text-3xl font-serif font-semibold text-yugen-light mb-8">
            Project Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-yugen-gold" />
                </div>
                <h4 className="text-xl font-semibold text-yugen-light mb-2">{step.title}</h4>
                <p className="text-yugen-light/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.1 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <h4 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
              Ready to Transform Your Digital Presence?
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-2xl mx-auto">
              Whether you choose to start with a deposit or approve the full build, we're ready to begin your journey 
              toward a luxury-grade, fully branded voting platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-yugen-gold text-yugen-gold font-semibold rounded-lg hover:bg-yugen-gold hover:text-yugen-black transition-all duration-300 flex items-center space-x-2"
              >
                <span>Download Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NextSteps
