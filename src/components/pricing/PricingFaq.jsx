// src/components/sections/pricing/PricingFAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PricingFAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqCategories = [
    {
      title: "Free Trial & Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "How does the 7-day free trial work?",
          answer: "You get full access to all features of your chosen plan for 7 days. No credit card required to start. After 7 days, you'll need to choose a paid plan to continue using Gentle-Tools."
        },
        {
          question: "What happens after my free trial ends?",
          answer: "Your account will be temporarily paused. You can upgrade to a paid plan at any time to reactivate your account. All your data, contacts, and settings will be preserved."
        },
        {
          question: "Can I switch plans during the trial?",
          answer: "Yes! You can upgrade or downgrade your plan at any time during the trial. Your trial period continues regardless of plan changes."
        },
        {
          question: "Is there any setup fee?",
          answer: "No! There are zero setup fees for any of our plans. You only pay the monthly or yearly subscription fee."
        }
      ]
    },
    {
      title: "Billing & Payments",
      icon: "💰",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major Nigerian payment methods including debit cards, bank transfers, and USSD via Paystack. All transactions are secure and encrypted."
        },
        {
          question: "Can I pay yearly instead of monthly?",
          answer: "Yes! Yearly billing saves you 20% compared to monthly payments. You can choose yearly billing during registration or switch anytime from your dashboard."
        },
        {
          question: "When will I be charged?",
          answer: "For paid plans: After your 7-day trial ends. For immediate upgrades: You're charged immediately and get instant access to paid features."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 14-day money-back guarantee on all annual plans. Monthly plans can be canceled anytime without additional charges."
        }
      ]
    },
    {
      title: "Plan Features & Limits",
      icon: "⚡",
      questions: [
        {
          question: "What happens if I exceed my message limit?",
          answer: "You'll receive a notification when you're approaching your limit. You can either upgrade your plan or purchase additional message packs."
        },
        {
          question: "Can I upgrade or downgrade my plan later?",
          answer: "Yes! You can change plans anytime. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle."
        },
        {
          question: "Do message limits roll over to the next month?",
          answer: "Unused messages do not roll over. Your message count resets at the beginning of each billing cycle."
        },
        {
          question: "Can I use multiple WhatsApp numbers?",
          answer: "Each plan supports one connected WhatsApp number. For multiple numbers, you'll need separate subscriptions or our Business plan for team features."
        }
      ]
    },
    {
      title: "Technical & Support",
      icon: "🔧",
      questions: [
        {
          question: "How do I connect my WhatsApp?",
          answer: "After registration, you'll scan a QR code with your WhatsApp. The process takes less than 2 minutes and requires no technical skills."
        },
        {
          question: "What if I need help setting up?",
          answer: "We provide 24/7 support via WhatsApp and email. You can also schedule a free setup call with our team during business hours."
        },
        {
          question: "Is my data secure?",
          answer: "Yes! We use end-to-end encryption and comply with data protection regulations. Your customer data is never shared with third parties."
        },
        {
          question: "Can I cancel anytime?",
          answer: "Absolutely! You can cancel your subscription anytime from your dashboard. No long-term contracts or cancellation fees."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Common Pricing
            <span className="text-primary-600"> Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to the most common questions about our plans, billing, and features.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">
                  {category.title}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <div
                    key={faqIndex}
                    className="overflow-hidden border border-gray-300 rounded-xl"
                  >
                    <button
                      onClick={() => toggleFAQ(`${categoryIndex}-${faqIndex}`)}
                      className="flex items-center justify-between w-full p-4 text-left transition-colors duration-200 hover:bg-gray-50"
                    >
                      <span className="flex-1 pr-4 font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === `${categoryIndex}-${faqIndex}` ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 text-primary-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === `${categoryIndex}-${faqIndex}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 border-t border-gray-300 bg-gray-50">
                            <p className="leading-relaxed text-gray-700">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 bg-white border border-gray-200 shadow-lg rounded-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Ready to Get Started?
            </h3>
            <p className="mb-6 text-gray-600">
              Join hundreds of Nigerian businesses automating their customer communication with Gentle-Tools.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
              >
                Start 7-Day Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-lg hover:border-primary-300"
              >
                Contact Sales
              </motion.button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingFAQ;