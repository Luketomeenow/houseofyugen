import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Cloud, Shield, BarChart3, Zap } from 'lucide-react'

const TechnicalFoundation = () => {
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

  const technologies = [
    {
      icon: Code,
      title: "Frontend",
      description: "Next.js (modern, scalable web framework)",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Database,
      title: "Backend",
      description: "PostgreSQL/Supabase (reliable, performant database solution)",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Cloud,
      title: "Hosting",
      description: "AWS/Vercel (industry-leading cloud infrastructure for global reach)",
      color: "from-orange-500/20 to-orange-600/20"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Secure Payment Processors",
      description: "Seamless and protected transactions with industry-standard security",
      color: "from-yugen-gold/20 to-yugen-gold/10"
    },
    {
      icon: BarChart3,
      title: "Admin Dashboard",
      description: "Comprehensive control over campaigns and data with real-time insights",
      color: "from-yugen-light/20 to-yugen-light/10"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant insights into voting trends and engagement patterns",
      color: "from-yugen-gold/20 to-yugen-gold/10"
    }
  ]

  return (
    <section id="technical" ref={ref} className="section-padding bg-yugen-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
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
            Robust <span className="gradient-text">Technical Foundation</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-yugen-light/80 max-w-3xl mx-auto"
          >
            Built on proven technologies and designed for scale, security, and performance
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Technical Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            {/* Core Technologies */}
            <div>
              <h3 className="text-3xl font-serif font-semibold text-yugen-light mb-8">
                Core Technologies
              </h3>
              
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className={`flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r ${tech.color} border border-yugen-gray/20`}
                  >
                    <div className="w-14 h-14 bg-yugen-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-7 h-7 text-yugen-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-yugen-light mb-2">{tech.title}</h4>
                      <p className="text-yugen-light/70">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-3xl font-serif font-semibold text-yugen-light mb-8">
                Key Features
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className={`flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r ${feature.color} border border-yugen-gray/20`}
                  >
                    <div className="w-14 h-14 bg-yugen-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-yugen-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-yugen-light mb-2">{feature.title}</h4>
                      <p className="text-yugen-light/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scalability Note */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
            >
              <h4 className="text-xl font-semibold text-yugen-light mb-3">Scalability</h4>
              <p className="text-yugen-light/80">
                Designed to handle high traffic for major events, with automatic scaling and performance optimization
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Representation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            {/* Server Infrastructure Visualization */}
            <div className="relative w-full h-96 bg-gradient-to-br from-yugen-gray/20 to-yugen-black/40 rounded-2xl border border-yugen-gray/20 p-8">
              {/* Server Racks */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="w-16 h-20 bg-yugen-gray/40 rounded-lg border border-yugen-gray/30 relative"
                  >
                    <div className="absolute top-2 left-2 w-2 h-2 bg-yugen-gold rounded-full animate-pulse" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-yugen-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </motion.div>
                ))}
              </div>

              {/* Cloud and Security */}
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-6xl text-yugen-light/30"
                >
                  ☁️
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-4xl text-yugen-gold"
                >
                  🔒
                </motion.div>
              </div>

              {/* Code Snippets */}
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + i * 0.1 }}
                    className="h-3 bg-gradient-to-r from-yugen-gold/30 to-yugen-light/30 rounded-full"
                    style={{ width: `${60 + i * 20}%` }}
                  />
                ))}
              </div>

              {/* Admin Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="absolute bottom-4 right-4 w-32 h-24 bg-white/10 rounded-lg border border-yugen-gray/30 p-3"
              >
                <div className="space-y-2">
                  <div className="h-2 bg-yugen-gold/40 rounded" />
                  <div className="h-2 bg-yugen-light/40 rounded" style={{ width: '70%' }} />
                  <div className="h-2 bg-yugen-gold/40 rounded" style={{ width: '90%' }} />
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-yugen-gold/20 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-yugen-light/20 rounded-full"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 rounded-2xl bg-gradient-to-r from-yugen-gold/10 to-yugen-light/10 border border-yugen-gold/20"
          >
            <h4 className="text-2xl font-serif font-semibold text-yugen-light mb-4">
              Technology That Scales With Your Success
            </h4>
            <p className="text-yugen-light/80 mb-6 max-w-2xl mx-auto">
              Our robust foundation ensures your platform grows seamlessly with your business needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yugen-gold to-yugen-light text-yugen-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Learn About Our Process
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalFoundation
