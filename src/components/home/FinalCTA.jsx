import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 border-b lg:py-24 border-gray-50">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl font-heading">
            Ready to Transform Your 
            <span className="text-primary-400"> Business?</span>
          </h2>
          
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300">
            Join over 500 Nigerian businesses already using Gentle-Tools to automate their customer conversations, 
            save time, and increase sales.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-3"
          >
            {[
              "7-day free trial",
              "No credit card required", 
              "Setup in 5 minutes"
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-xl sm:w-auto"
              >
                Start Your Free Trial
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 bg-white rounded-lg hover:bg-gray-100 sm:w-auto"
              >
                Talk to Sales
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12"
          >
            <p className="mb-6 text-sm font-medium text-gray-400 uppercase">
              Trusted by businesses across Nigeria
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-500">
              {[
                "Lagos", "Abuja", "Port Harcourt", 
                "Ibadan", "Kano", "Benin"
              ].map((city, index) => (
                <div key={index} className="text-sm">
                  {city}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;