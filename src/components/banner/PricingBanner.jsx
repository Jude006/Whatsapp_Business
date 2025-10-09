// src/components/banner/PricingBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PricingBanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const benefits = [
    {
      icon: "💰",
      text: "Naira Pricing - No Dollar Charges"
    },
    {
      icon: "🔄",
      text: "7-Day Free Trial - No Credit Card"
    },
    {
      icon: "⚡",
      text: "Instant Access After Payment"
    },
    {
      icon: "🔒",
      text: "Secure Payment via Paystack"
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
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,92,77,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(2,92,77,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
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
            <span>TRANSPARENT PRICING</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl font-heading"
          >
            Simple, Honest
            <span className="block mt-2">
              <span className="text-primary-600">Pricing</span> for Nigerian
            </span>
            Businesses
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            No hidden fees, no dollar charges. Choose the plan that fits your business needs. 
            All plans include a 7-day free trial with full access to all features.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            variants={itemVariants}
            className="grid max-w-2xl grid-cols-1 gap-4 mx-auto mb-12 sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium text-gray-700">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid max-w-2xl grid-cols-2 gap-8 mx-auto md:grid-cols-4"
          >
            {[
              { number: "500+", label: "Active Businesses" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "₦", label: "Naira Only" },
              { number: "7 Days", label: "Free Trial" }
            ].map((stat, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default PricingBanner;