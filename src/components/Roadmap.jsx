import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Eye, CreditCard, Zap, Palette, CheckCircle } from 'lucide-react'

const Roadmap = () => {
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

  const phases = [
    {
      number: 1,
      title: "Prototype",
      hours: "100-150 hrs",
      description: "Initial development of core voting functionality",
      icon: Rocket,
      color: "from-yugen-gold/20 to-yugen-gold/10"
    },
    {
      number: 2,
      title: "Demo & Revisions",
      hours: "40 hrs",
      description: "Client review and iterative adjustments based on feedback",
      icon: Eye,
      color: "from-yugen-light/20 to-yugen-light/10"
    },
    {
      number: 3,
      title: "Payment Integration",
      hours: "10-20 hrs",
      description: "Secure integration with chosen payment gateways",
      icon: CreditCard,
      color: "from-yugen-gold/20 to-yugen-gold/10"
    },
    {
      number: 4,
      title: "Stress Testing",
      hours: "10-20 hrs",
      description: "Ensuring platform stability and performance under load (AI agents + optional influencer campaign)",
      icon: Zap,
      color: "from-yugen-light/20 to-yugen-light/10"
    },
    {
      number: 5,
      title: "Branding Integration",
      hours: "40 hrs",
      description: "Full visual and aesthetic alignment with House of Yugen's brand guidelines",
      icon: Palette,
      color: "from-yugen-gold/20 to-yugen-gold/10"
    },
    {
      number: 6,
      title: "Soft Launch",
      hours: "40 hrs",
      description: "Controlled release and final performance checks",
      icon: CheckCircle,
      color: "from-yugen-light/20 to-yugen-light/10"
    }
  ]

  return (
    <section id="roadmap" ref={ref} className="section-padding bg-yugen-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-yugen-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-yugen-light/5 rounded-full blur-3xl" />
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
            Phased Roadmap: <span className="gradient-text">From Concept to Launch</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            A structured approach that ensures quality, transparency, and your complete satisfaction
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yugen-gold to-yugen-light opacity-30" />

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Phase Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yugen-gold rounded-full flex items-center justify-center z-10 border-4 border-yugen-black"
                >
                  <span className="text-yugen-black font-bold text-lg">{phase.number}</span>
                </motion.div>

                {/* Phase Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${phase.color} border border-yugen-gray/20 backdrop-blur-sm`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-yugen-gold/20 rounded-full flex items-center justify-center">
                        <phase.icon className="w-5 h-5 text-yugen-gold" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-yugen-light">
                        {phase.title}
                      </h3>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-yugen-gold/20 text-yugen-gold text-sm font-medium rounded-full">
                        {phase.hours}
                      </span>
                    </div>
                    
                    <p className="text-yugen-light/80 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <h4 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
              Efficiency Through Structure
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-3xl mx-auto">
              This phased approach allows for agility and ensures the final product meets your exact specifications. 
              By partnering with DSC, House of Yugen avoids an estimated <span className="text-yugen-gold font-semibold">~250-400 developer hours</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">30-45</div>
                <div className="text-yugen-light/70 text-sm">Days to Prototype</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">240-320</div>
                <div className="text-yugen-light/70 text-sm">Total Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">6</div>
                <div className="text-yugen-light/70 text-sm">Phases</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap
