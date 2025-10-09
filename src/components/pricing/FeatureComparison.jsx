// src/components/sections/pricing/FeatureComparison.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeatureComparison = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const featureCategories = [
    {
      category: "Core Features",
      features: [
        {
          name: "WhatsApp Connection",
          description: "Connect your WhatsApp Business account",
          starter: true,
          professional: true,
          business: true
        },
        {
          name: "Bulk Messaging",
          description: "Send messages to multiple contacts",
          starter: "50 messages/month",
          professional: "2,000 messages/month",
          business: "5,000 messages/month"
        },
        {
          name: "Auto-Reply System",
          description: "Automatic responses to customer messages",
          starter: "Basic keywords",
          professional: "Advanced AI + Keywords",
          business: "AI-powered smart replies"
        },
        {
          name: "Product Catalog",
          description: "Digital catalog for your products",
          starter: "50 products",
          professional: "Unlimited",
          business: "Unlimited + Categories"
        }
      ]
    },
    {
      category: "Automation & Tools",
      features: [
        {
          name: "Message Scheduling",
          description: "Schedule messages for later delivery",
          starter: false,
          professional: true,
          business: true
        },
        {
          name: "Contact Segmentation",
          description: "Group contacts for targeted messaging",
          starter: false,
          professional: "Basic groups",
          business: "Advanced segments"
        },
        {
          name: "Broadcast Templates",
          description: "Save and reuse message templates",
          starter: "5 templates",
          professional: "20 templates",
          business: "Unlimited templates"
        },
        {
          name: "Quick Replies",
          description: "Pre-written responses for common questions",
          starter: "10 quick replies",
          professional: "50 quick replies",
          business: "Unlimited quick replies"
        }
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        {
          name: "Basic Analytics",
          description: "Message delivery and open rates",
          starter: true,
          professional: true,
          business: true
        },
        {
          name: "Advanced Analytics",
          description: "Customer engagement and conversion tracking",
          starter: false,
          professional: true,
          business: true
        },
        {
          name: "Custom Reports",
          description: "Generate custom performance reports",
          starter: false,
          professional: false,
          business: true
        },
        {
          name: "Export Data",
          description: "Export contacts and message history",
          starter: "CSV only",
          professional: "CSV & PDF",
          business: "CSV, PDF, Excel"
        }
      ]
    },
    {
      category: "Support & Management",
      features: [
        {
          name: "Email Support",
          description: "Get help via email",
          starter: true,
          professional: true,
          business: true
        },
        {
          name: "Chat Support",
          description: "Live chat support",
          starter: false,
          professional: true,
          business: true
        },
        {
          name: "Phone Support",
          description: "Direct phone support",
          starter: false,
          professional: false,
          business: true
        },
        {
          name: "Team Members",
          description: "Add team members to your account",
          starter: "1 user",
          professional: "3 users",
          business: "Unlimited users"
        },
        {
          name: "API Access",
          description: "Integrate with other tools",
          starter: false,
          professional: false,
          business: true
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderFeatureValue = (value) => {
    if (value === true) return (
      <svg className="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
    if (value === false) return (
      <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
    return <span className="text-sm text-center text-gray-700">{value}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full text-primary-600 bg-primary-50">
            COMPLETE FEATURE BREAKDOWN
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Compare All
            <span className="text-primary-600"> Features</span>
          </h2>
          <p className="text-lg text-gray-600">
            See exactly what you get with each plan. All features are available during your 7-day free trial.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-200 bg-gray-50">
            <div className="text-left">
              <span className="font-semibold text-gray-900">Features</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-gray-600">Starter</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-primary-600">Professional</span>
              <div className="mt-1">
                <span className="inline-block px-2 py-1 text-xs font-medium text-white rounded-full bg-primary-500">
                  POPULAR
                </span>
              </div>
            </div>
            <div className="text-center">
              <span className="font-semibold text-gray-900">Business</span>
            </div>
          </div>

          {/* Feature Categories */}
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="border-b border-gray-200 last:border-b-0"
            >
              {/* Category Header */}
              <div className="p-4 border-b bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-gray-900 font-heading">
                  {category.category}
                </h3>
              </div>

              {/* Features List */}
              <div className="divide-y divide-gray-100">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                    className="grid grid-cols-4 gap-4 p-6 transition-colors duration-200 hover:bg-gray-50"
                  >
                    {/* Feature Name & Description */}
                    <div className="pr-4">
                      <div className="font-medium text-gray-900">
                        {feature.name}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {feature.description}
                      </div>
                    </div>

                    {/* Starter Plan */}
                    <div className="flex items-center justify-center">
                      {renderFeatureValue(feature.starter)}
                    </div>

                    {/* Professional Plan */}
                    <div className="flex items-center justify-center">
                      {renderFeatureValue(feature.professional)}
                    </div>

                    {/* Business Plan */}
                    <div className="flex items-center justify-center">
                      {renderFeatureValue(feature.business)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Plan Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3"
        >
          {/* Starter Summary */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
          >
            <h4 className="mb-3 text-lg font-semibold text-gray-900 font-heading">Starter Plan</h4>
            <p className="mb-4 text-sm text-gray-600">
              Perfect for solo entrepreneurs and small businesses just starting with automation.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Basic messaging automation</li>
              <li>• Essential customer management</li>
              <li>• Perfect for testing the waters</li>
            </ul>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 transition-all duration-300 bg-white border-2 shadow-lg border-primary-500 rounded-2xl hover:shadow-xl"
          >
            <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white rounded-full bg-primary-500">
              RECOMMENDED
            </div>
            <h4 className="mb-3 text-lg font-semibold text-gray-900 font-heading">Professional Plan</h4>
            <p className="mb-4 text-sm text-gray-600">
              Best value for growing businesses that need advanced automation and analytics.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Advanced automation features</li>
              <li>• Better messaging limits</li>
              <li>• Priority support included</li>
            </ul>
          </motion.div>

          {/* Business Summary */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
          >
            <h4 className="mb-3 text-lg font-semibold text-gray-900 font-heading">Business Plan</h4>
            <p className="mb-4 text-sm text-gray-600">
              For established businesses needing full automation and custom integrations.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Unlimited automation</li>
              <li>• API and custom solutions</li>
              <li>• Dedicated support team</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 border bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl border-primary-200">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Still Not Sure Which Plan to Choose?
            </h3>
            <p className="mb-6 text-gray-700">
              Start with the 7-day free trial on any plan. You can upgrade or downgrade at any time.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
              >
                Start Professional Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-lg hover:border-primary-300"
              >
                Talk to Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparison;