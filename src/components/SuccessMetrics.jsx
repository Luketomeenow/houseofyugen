import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, PiggyBank, Palette, FileText } from 'lucide-react'

const SuccessMetrics = () => {
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

  const metrics = [
    {
      icon: Trophy,
      title: "Seamless Platform",
      description: "A branded, luxury-grade platform for Miss Universe franchise voting, fashion events, and VIP community polls.",
      color: "from-yugen-gold/20 to-yugen-gold/10"
    },
    {
      icon: PiggyBank,
      title: "Primary Objectives",
      items: [
        "Accept payments securely",
        "Collect valuable voter data",
        "Deliver clear campaign overviews"
      ],
      color: "from-yugen-light/20 to-yugen-light/10"
    },
    {
      icon: Palette,
      title: "Secondary Objectives",
      items: [
        "Refined branding and aesthetics",
        "Enhanced user experience"
      ],
      color: "from-yugen-gold/20 to-yugen-gold/10"
    },
    {
      icon: FileText,
      title: "Long-Term Ownership",
      description: "House of Yugen retains full ownership of payments, data, and intellectual property rights.",
      color: "from-yugen-light/20 to-yugen-light/10"
    }
  ]

  return (
    <section id="success" ref={ref} className="section-padding bg-yugen-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, #D4AF37 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
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
            Defining Success: <span className="gradient-text">What We Will Achieve Together</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            Clear objectives and measurable outcomes that align with your business goals
          </motion.p>
        </motion.div>

        {/* Success Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${metric.color} border border-yugen-gray/20 backdrop-blur-sm card-hover`}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mb-6"
              >
                <metric.icon className="w-8 h-8 text-yugen-gold" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
                {metric.title}
              </h3>
              
              {metric.description ? (
                <p className="text-yugen-light/80 leading-relaxed">
                  {metric.description}
                </p>
              ) : (
                <ul className="space-y-2">
                  {metric.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yugen-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-yugen-light/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yugen-gold rounded-full opacity-60" />
            </motion.div>
          ))}
        </motion.div>

        {/* Success Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <h4 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
              Measurable Results, Tangible Impact
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-3xl mx-auto">
              Our success is measured by your success. We're committed to delivering a platform that not only meets 
              your current needs but also scales with your future growth and ambitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">100%</div>
                <div className="text-yugen-light/70 text-sm">Brand Control</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">0%</div>
                <div className="text-yugen-light/70 text-sm">Platform Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yugen-gold mb-2">∞</div>
                <div className="text-yugen-light/70 text-sm">Scalability</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessMetrics
