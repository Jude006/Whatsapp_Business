// src/components/sections/about/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Key differentiators
  const differentiators = [
    {
      icon: "🇳🇬",
      title: "Built for Nigeria",
      description: "Designed specifically for Nigerian business realities, internet conditions, and customer behaviors.",
      features: ["Naira pricing", "Local support", "Nigerian business focus"]
    },
    {
      icon: "💸",
      title: "Affordable Excellence",
      description: "Enterprise-level features at prices that make sense for Nigerian small and medium businesses.",
      features: ["No hidden costs", "Transparent pricing", "No setup fees"]
    },
    {
      icon: "⚡",
      title: "Lightning Fast Setup",
      description: "Get started in under 5 minutes. No technical skills required - just connect and go.",
      features: ["5-minute setup", "No coding needed", "Instant activation"]
    },
    {
      icon: "🔒",
      title: "Bank-Level Security",
      description: "Your data and customer information are protected with enterprise-grade security measures.",
      features: ["End-to-end encryption", "Data privacy", "Secure backups"]
    }
  ];

  // Comparison table
  const comparison = [
    {
      feature: "Naira Pricing",
      gentleTools: "✅",
      competitors: "❌"
    },
    {
      feature: "24/7 Nigerian Support",
      gentleTools: "✅",
      competitors: "❌"
    },
    {
      feature: "No Setup Fees",
      gentleTools: "✅",
      competitors: "Often $50+"
    },
    {
      feature: "Free Trial",
      gentleTools: "7 days",
      competitors: "Limited or none"
    },
    {
      feature: "Local Payment Methods",
      gentleTools: "✅",
      competitors: "❌"
    },
    {
      feature: "Built for Nigerian Internet",
      gentleTools: "✅",
      competitors: "❌"
    }
  ];

  // Success metrics
  const successMetrics = [
    {
      number: "98%",
      label: "Customer Satisfaction Rate",
      description: "Based on user feedback and reviews"
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      description: "Rated by Nigerian business owners"
    },
    {
      number: "200%",
      label: "Average Revenue Growth",
      description: "For businesses using our tools"
    },
    {
      number: "24/7",
      label: "Support Availability",
      description: "Real help when you need it"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full text-primary-600 bg-primary-50">
            WHY GENTLE-TOOLS
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            The Nigerian Business
            <span className="text-primary-600"> Advantage</span>
          </h2>
          <p className="text-lg text-gray-600">
            While others build for global markets, we build specifically for Nigerian entrepreneurs. 
            Here's why hundreds of businesses choose Gentle-Tools.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-lg group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 text-3xl transition-colors duration-300 bg-primary-50 rounded-2xl group-hover:bg-primary-100"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900 font-heading">
                {item.title}
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">
                {item.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
              The 
              <span className="text-primary-600"> Gentle-Tools Difference</span>
            </h3>
            <p className="text-lg text-gray-600">
              See how we stack up against other solutions in the market.
            </p>
          </div>

          <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200 bg-gray-50">
              <div className="text-left">
                <span className="font-semibold text-gray-900">Feature</span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-primary-600">Gentle-Tools</span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-gray-600">Other Solutions</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
              {comparison.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  className="grid grid-cols-3 gap-4 p-6 transition-colors duration-200 hover:bg-gray-50"
                >
                  <div className="text-left">
                    <span className="font-medium text-gray-900">{row.feature}</span>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-primary-600">{row.gentleTools}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600">{row.competitors}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
              Proven 
              <span className="text-primary-600"> Results</span>
            </h3>
            <p className="text-lg text-gray-600">
              The numbers speak for themselves. Here's what our customers achieve with Gentle-Tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ y: -5 }}
                className="p-6 text-center transition-all duration-300 border border-gray-200 bg-gray-50 rounded-2xl hover:border-primary-300"
              >
                <div className="mb-2 text-3xl font-bold text-primary-600 font-heading">
                  {metric.number}
                </div>
                <div className="mb-2 font-semibold text-gray-900">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Love Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
              Loved by 
              <span className="text-primary-600"> Nigerian Businesses</span>
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
              "Gentle-Tools understood our Nigerian business challenges from day one. 
              The local support and Naira pricing made all the difference for our growth."
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="text-left">
                <div className="font-semibold text-gray-900">Chioma's Boutique</div>
                <div className="text-sm text-gray-600">Lagos, Nigeria</div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Ready to Experience the Difference?
            </h3>
            <p className="mb-6 text-gray-600">
              Join hundreds of Nigerian businesses growing faster with tools built specifically for them.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-lg hover:border-primary-300"
              >
                See Case Studies
              </motion.button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required • Setup in 5 minutes • 7-day free trial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;