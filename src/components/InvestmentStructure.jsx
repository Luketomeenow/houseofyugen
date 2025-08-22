import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, CreditCard, Users, CheckCircle, AlertCircle } from 'lucide-react'

const InvestmentStructure = () => {
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
    <section id="investment" ref={ref} className="section-padding bg-yugen-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-yugen-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-yugen-light/5 rounded-full blur-3xl" />
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
            Investment Structure & <span className="gradient-text">Client Commitments</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            Transparent pricing with no hidden costs - we believe in clear communication and mutual success
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Labour & Project Management Fee */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yugen-gold/10 to-yugen-gold/5 border border-yugen-gold/20 h-full">
              <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-yugen-gold" />
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-6">
                Labour & Project Management Fee
              </h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-yugen-gold mb-2">150,000 PHP</div>
                <p className="text-yugen-light/70">for DSC's Done-For-You service</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold" />
                  <span className="text-yugen-light/80 text-sm">Complete platform development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold" />
                  <span className="text-yugen-light/80 text-sm">Project management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold" />
                  <span className="text-yugen-light/80 text-sm">Testing & deployment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client's Ongoing Costs */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yugen-light/10 to-yugen-light/5 border border-yugen-gray/20 h-full">
              <div className="w-16 h-16 bg-yugen-light/20 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-yugen-light" />
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-6">
                Client's Ongoing Costs
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yugen-light mt-1" />
                  <span className="text-yugen-light/80 text-sm">Hosting and compute scaling fees</span>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yugen-light mt-1" />
                  <span className="text-yugen-light/80 text-sm">Stress-testing services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yugen-light mt-1" />
                  <span className="text-yugen-light/80 text-sm">Payment processing fees (finalized with your finance team)</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yugen-gray/20 rounded-lg">
                <p className="text-yugen-light/70 text-sm">
                  <strong>Note:</strong> These are industry-standard costs that you would incur regardless of platform choice
                </p>
              </div>
            </div>
          </motion.div>

          {/* Commitments Required */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-yugen-gold/10 to-yugen-gold/5 border border-yugen-gold/20 h-full">
                             <div className="w-16 h-16 bg-yugen-gold/20 rounded-full flex items-center justify-center mb-6">
                 <Users className="w-8 h-8 text-yugen-gold" />
               </div>
              
              <h3 className="text-2xl font-serif font-semibold text-yugen-light mb-6">
                Commitments Required
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold mt-1" />
                  <span className="text-yugen-light/80 text-sm">Timely approvals and feedback</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold mt-1" />
                  <span className="text-yugen-light/80 text-sm">Collaborative budget planning with DSC</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold mt-1" />
                  <span className="text-yugen-light/80 text-sm">Provision of branding assets</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold mt-1" />
                  <span className="text-yugen-light/80 text-sm">Setup of payment processor accounts and API keys</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yugen-gold mt-1" />
                  <span className="text-yugen-light/80 text-sm">Support for pilot campaign activities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transparency Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.9 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <h4 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
              Complete Transparency, Zero Surprises
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-3xl mx-auto">
              Our transparent fee structure ensures you understand the full scope of your investment, with no hidden costs for DSC's services. 
              We believe in building long-term partnerships based on trust and mutual success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Schedule a Detailed Discussion
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestmentStructure
