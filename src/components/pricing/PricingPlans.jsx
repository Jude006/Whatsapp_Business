// src/components/sections/pricing/PricingPlans.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: "₦3,000",
      yearlyPrice: "₦30,000",
      yearlySavings: "Save ₦6,000",
      features: [
        "500 messages per month",
        "Basic auto-reply system",
        "50 product catalog limit",
        "Email support",
        "Basic analytics dashboard",
        "Single WhatsApp number"
      ],
      limitations: [
        "No broadcast scheduling",
        "No advanced analytics",
        "No team members"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with more customers",
      monthlyPrice: "₦7,000",
      yearlyPrice: "₦67,000",
      yearlySavings: "Save ₦17,000",
      features: [
        "2,000 messages per month",
        "Advanced auto-reply with AI",
        "Unlimited product catalog",
        "Priority email & chat support",
        "Advanced analytics",
        "Broadcast scheduling",
        "Contact segmentation",
        "2 team members"
      ],
      limitations: [
        "No API access",
        "No custom reports"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "primary"
    },
    {
      name: "Business",
      description: "For established businesses needing full automation",
      monthlyPrice: "₦12,000",
      yearlyPrice: "₦115,000",
      yearlySavings: "Save ₦29,000",
      features: [
        "5,000 messages per month",
        "AI-powered smart replies",
        "Unlimited products & categories",
        "24/7 phone & WhatsApp support",
        "Custom analytics reports",
        "API access",
        "Unlimited team members",
        "White-label options",
        "Custom integration support"
      ],
      limitations: [],
      popular: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline"
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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
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
    <section ref={sectionRef} className="py-20 bg-gray-50 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-white border border-gray-200 shadow-sm rounded-2xl">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly Billing
              <span className="px-2 py-1 ml-2 text-xs text-green-700 bg-green-100 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative ${
                plan.popular 
                  ? 'ring-2 ring-primary-500 transform scale-105 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              } bg-white rounded-2xl transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute transform -translate-x-1/2 -top-3 left-1/2">
                  <span className="px-4 py-1 text-xs font-semibold text-white rounded-full shadow-lg bg-primary-500">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 font-heading">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-900 font-heading">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600">
                      {billingPeriod === 'monthly' ? '/month' : '/year'}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="mt-2 text-sm font-medium text-green-600">
                      {plan.yearlySavings}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 font-semibold rounded-xl transition-colors duration-300 mb-8 ${
                      plan.buttonVariant === 'primary'
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-gray-200">
                    <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase">
                      Not Included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center gap-3 text-sm text-gray-500">
                          <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Trial Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="p-6 bg-white border border-primary-200 rounded-2xl">
            <h4 className="mb-2 text-lg font-semibold text-gray-900 font-heading">
              🎁 All Plans Include 7-Day Free Trial
            </h4>
            <p className="text-sm text-gray-600">
              No credit card required to start. Experience all features risk-free for 7 days. 
              Upgrade to a paid plan only when you're ready.
            </p>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-gray-600">Secure payments powered by</p>
          <div className="flex items-center justify-center gap-6">
            {/* Paystack Logo */}
            <div className="flex items-center justify-center w-32 h-10 bg-gray-900 rounded-lg">
              <span className="text-sm font-bold text-white">PAYSTACK</span>
            </div>
            {/* Payment Icons */}
            <div className="flex gap-4 text-gray-400">
              <div className="flex items-center justify-center w-10 h-6 text-xs bg-gray-200 rounded">💳</div>
              <div className="flex items-center justify-center w-10 h-6 text-xs bg-gray-200 rounded">🏦</div>
              <div className="flex items-center justify-center w-10 h-6 text-xs bg-gray-200 rounded">📱</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Accepting all Nigerian debit cards, bank transfers, and USSD
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;