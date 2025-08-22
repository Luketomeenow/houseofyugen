import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Clock, UserCheck, Rocket } from 'lucide-react'

const ValueEquation = () => {
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

  const cards = [
    {
      icon: Target,
      title: "Dream Outcome",
      description: "A fully branded, scalable, and luxury voting platform tailored for House of Yugen's global reach.",
      color: "from-yugen-gold/20 to-yugen-gold/5"
    },
    {
      icon: Rocket,
      title: "Likelihood of Success",
      description: "Built on proven tech frameworks and delivered through a phased, structured roadmap.",
      color: "from-yugen-light/20 to-yugen-light/5"
    },
    {
      icon: Clock,
      title: "Time to Delivery",
      description: "Expect a functional prototype in 30-45 days, with full rollout in subsequent phases.",
      color: "from-yugen-gold/20 to-yugen-gold/5"
    },
    {
      icon: UserCheck,
      title: "Client Effort",
      description: "Minimal input required from House of Yugen, limited to key approvals, payment processor setup, and campaign support.",
      color: "from-yugen-light/20 to-yugen-light/5"
    }
  ]

  return (
    <section id="value" ref={ref} className="section-padding bg-yugen-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yugen-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-yugen-light/5 rounded-full blur-3xl" />
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
            The Value Equation: <span className="gradient-text">Our Commitment to Your Success</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            We've structured our partnership to maximize your success while minimizing risk and effort
          </motion.p>
        </motion.div>

        {/* Value Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${card.color} border border-yugen-gray/20 backdrop-blur-sm card-hover`}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mb-6"
              >
                <card.icon className="w-8 h-8 text-yugen-gold" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
                {card.title}
              </h3>
              
              <p className="text-yugen-light/80 leading-relaxed">
                {card.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yugen-gold rounded-full opacity-60" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
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
              Ready to See This Vision Come to Life?
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-2xl mx-auto">
              Our proven approach ensures you get exactly what you need, when you need it, with minimal disruption to your operations
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View Our Roadmap
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueEquation
