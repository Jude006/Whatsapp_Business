// src/components/sections/FeaturesShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturesShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Modern SVG Icons
  const BroadcastIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );

  const AutoReplyIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
    </svg>
  );

  const CatalogIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  );

  const AnalyticsIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const features = [
    {
      icon: BroadcastIcon,
      title: "Bulk Broadcast",
      description: "Send personalized messages to thousands of customers with one click. Schedule campaigns and track delivery in real-time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AutoReplyIcon,
      title: "Smart Auto-Reply",
      description: "24/7 automated responses with AI intelligence. Handle customer inquiries instantly with smart keyword triggers.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CatalogIcon,
      title: "Product Catalog",
      description: "Beautiful digital catalogs with inventory tracking. Share products instantly via links or QR codes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: AnalyticsIcon,
      title: "Advanced Analytics",
      description: "Track message performance, customer engagement, and sales conversions with detailed insights.",
      color: "from-orange-500 to-red-500"
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
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full text-primary-600 bg-primary-50"
          >
            POWERFUL FEATURES
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Everything You Need to 
            <span className="block mt-2 text-transparent bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text">
              Grow Your Business
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Advanced WhatsApp tools designed for Nigerian businesses to automate, engage, and convert.
          </p>
        </motion.div>

        {/* Features Grid - Modern Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative h-full p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md">
                {/* Gradient Icon Background */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-semibold text-gray-900 font-heading">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${feature.color} rounded-full -translate-x-1/2`}
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100`}
                animate={isInView ? { 
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.5, 0]
                } : {}}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.5 
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4"
        >
          {[
            { number: "500+", label: "Active Businesses" },
            { number: "98%", label: "Delivery Rate" },
            { number: "24/7", label: "Support" },
            { number: "1M+", label: "Messages Monthly" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gray-900 font-heading">{stat.number}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;