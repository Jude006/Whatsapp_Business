// src/components/sections/PricingPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const PricingPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const plans = [
    {
      name: "Starter",
      price: "₦3,000",
      period: "/month",
      description: "Perfect for small businesses just getting started",
      features: [
        "500 messages/month",
        "Basic auto-replies",
        "50 product catalog",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₦7,000",
      period: "/month",
      description: "Ideal for growing businesses with more customers",
      features: [
        "2,000 messages/month",
        "Advanced auto-replies",
        "Unlimited products",
        "Priority support",
        "Advanced analytics",
        "Broadcast scheduling"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "₦12,000",
      period: "/month",
      description: "For established businesses needing full automation",
      features: [
        "5,000 messages/month",
        "AI-powered replies",
        "Multiple users",
        "24/7 phone support",
        "Custom reports",
        "API access"
      ],
      popular: false
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
    hidden: { opacity: 0, y: 30 },
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
    <section ref={sectionRef} className="py-20 bg-gray-50 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full text-primary-600 bg-primary-50">
            TRANSPARENT PRICING
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Simple, Honest 
            <span className="text-primary-600"> Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            No hidden fees. Start with our free trial and upgrade when you're ready.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative ${
                plan.popular 
                  ? 'ring-2 ring-primary-500 transform scale-105' 
                  : 'border border-gray-200'
              } bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute transform -translate-x-1/2 -top-3 left-1/2">
                  <span className="px-4 py-1 text-xs font-semibold text-white rounded-full bg-primary-500">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="mb-2 text-2xl font-bold text-gray-900 font-heading">
                  {plan.name}
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 font-heading">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 font-semibold rounded-lg transition-colors duration-300 ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;