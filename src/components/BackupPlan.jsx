import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Pause, TestTube, CreditCard, Shield } from 'lucide-react'

const BackupPlan = () => {
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

  const backupOptions = [
    {
      icon: Pause,
      title: "Project Pause Option",
      description: "House of Yugen can pause the project at any stage if priorities shift or circumstances change, providing ultimate control.",
      color: "from-yugen-gold/20 to-yugen-gold/10",
      highlight: "pause the project at any stage"
    },
    {
      icon: TestTube,
      title: "Beta Deliverable",
      description: "For a 20,000 PHP down payment, DSC provides a research-backed beta + roadmap. This is yours to keep, even if the full scope is not continued.",
      color: "from-yugen-light/20 to-yugen-light/10",
      highlight: "20,000 PHP down payment"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Client may pay in full or in phases, moving at their own pace, ensuring financial comfort.",
      color: "from-yugen-gold/20 to-yugen-gold/10",
      highlight: "pay in full or in phases"
    }
  ]

  return (
    <section id="backup" ref={ref} className="section-padding bg-yugen-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
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
            Backup Plan & Flexibility: <span className="gradient-text">Mitigating Risks</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            We understand that business priorities can change. Our flexible approach ensures you're never locked into commitments that don't serve your current needs.
          </motion.p>
        </motion.div>

        {/* Backup Options Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {backupOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${option.color} border border-yugen-gray/20 backdrop-blur-sm card-hover`}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mb-6"
              >
                <option.icon className="w-8 h-8 text-yugen-gold" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
                {option.title}
              </h3>
              
              <p className="text-yugen-light/80 leading-relaxed">
                {option.description.split(option.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-yugen-gold font-semibold">{option.highlight}</span>
                    )}
                  </span>
                ))}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yugen-gold rounded-full opacity-60" />
            </motion.div>
          ))}
        </motion.div>

        {/* Risk Mitigation Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yugen-gold/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-yugen-gold" />
              </div>
              <h4 className="text-2xl font-serif font-semibold text-yugen-light">
                Maximum Flexibility & Transparency
              </h4>
            </div>
            
            <p className="text-yugen-light/80 mb-6 max-w-3xl mx-auto">
              DSC ensures maximum flexibility and transparency, allowing House of Yugen to manage timing, commitment, 
              and financial exposure with confidence. Our partnership is built on trust and mutual success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">100%</div>
                <div className="text-yugen-light/70 text-sm">Flexibility</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">0</div>
                <div className="text-yugen-light/70 text-sm">Lock-in Periods</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">∞</div>
                <div className="text-yugen-light/70 text-sm">Control</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BackupPlan
