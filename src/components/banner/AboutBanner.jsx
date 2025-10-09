// src/components/banner/AboutBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutBanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Stats data
  const stats = [
    { number: "500+", label: "Businesses Empowered" },
    { number: "1M+", label: "Messages Monthly" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "2024", label: "Founded" }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-white lg:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 bg-primary-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-80 h-80 bg-primary-100 blur-3xl opacity-30"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-primary-50 border-primary-200 text-primary-700"
          >
            <span>OUR STORY</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl font-heading"
          >
            Empowering Nigerian
            <span className="block mt-2">
              <span className="text-primary-600">Businesses</span> Through
            </span>
            <span className="text-primary-600">WhatsApp Automation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            At Gentle-Tools, we believe every Nigerian business deserves access to powerful 
            automation tools that help them grow, engage customers, and save time. 
            We're on a mission to democratize WhatsApp business tools for entrepreneurs across Nigeria.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid max-w-2xl grid-cols-2 gap-8 mx-auto md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-gray-900 font-heading md:text-3xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 mt-12 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-500 hover:bg-primary-600"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-lg hover:border-primary-300"
            >
              Meet Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
          <div className="flex justify-center w-6 h-10 border-2 border-gray-300 rounded-full">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 mt-2 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutBanner;