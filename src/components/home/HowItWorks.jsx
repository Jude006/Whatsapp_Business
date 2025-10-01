// src/components/sections/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Modern SVG Icons
  const ConnectIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );

  const SetupIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const EngageIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  );

  const steps = [
    {
      step: "01",
      icon: ConnectIcon,
      title: "Connect Your WhatsApp",
      description: "Securely connect your WhatsApp Business account in less than 2 minutes. No technical skills required.",
      features: ["QR Code Connection", "Secure & Encrypted", "Instant Setup"]
    },
    {
      step: "02",
      icon: SetupIcon,
      title: "Set Up Your Tools",
      description: "Configure your broadcast messages, auto-replies, and product catalog with our intuitive dashboard.",
      features: ["Drag & Drop Setup", "Pre-built Templates", "Customizable Messages"]
    },
    {
      step: "03",
      icon: EngageIcon,
      title: "Engage & Grow",
      description: "Start sending automated messages, track performance, and watch your business grow exponentially.",
      features: ["Real-time Analytics", "Customer Insights", "Performance Tracking"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden bg-white lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full text-primary-600 bg-primary-50">
            SIMPLE PROCESS
          </div>
          
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Get Started in 
            <span className="text-primary-600"> 3 Easy Steps</span>
          </h2>
          
          <p className="text-lg text-gray-600">
            Start automating your WhatsApp business in minutes. No coding required, just follow these simple steps.
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connecting Line - Fixed for mobile */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-primary-100 to-transparent hidden lg:block"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {/* Step Card - Fixed padding and spacing */}
                <div className="h-full p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
                  
                  {/* Step Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="inline-flex items-center justify-center w-10 h-10 mb-4 text-white bg-gray-900 rounded-lg"
                  >
                    <span className="text-sm font-bold font-heading">{step.step}</span>
                  </motion.div>

                  {/* Icon Container - Fixed colors */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary-50">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 font-heading">
                    {step.title}
                  </h3>
                  
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Features List - Fixed spacing */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA - Cleaner design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 border bg-primary-50 rounded-2xl border-primary-100">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Ready to Get Started?
            </h3>
            <p className="mb-6 text-gray-600">
              Join hundreds of Nigerian businesses automating their WhatsApp customer service today.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-500 hover:bg-primary-600"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 font-semibold text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-lg hover:border-primary-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;