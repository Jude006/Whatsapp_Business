// src/components/sections/contact/FAQSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "How do I connect my WhatsApp to Gentle-Tools?",
          answer: "Simply go to your dashboard, click 'Connect WhatsApp', and scan the QR code with your phone. The process takes less than 2 minutes and requires no technical skills."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 7-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan anytime during or after the trial."
        },
        {
          question: "What happens after my free trial ends?",
          answer: "After your 7-day trial, you'll need to choose a subscription plan to continue using Gentle-Tools. Your data and settings will be preserved when you upgrade."
        }
      ]
    },
    {
      title: "Pricing & Billing",
      icon: "💰",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major payment methods including bank transfers, debit cards, and Paystack for Nigerian businesses. All transactions are secure and encrypted."
        },
        {
          question: "Can I change my plan later?",
          answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in billing."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes! We offer 20% discount when you choose annual billing instead of monthly. This helps you save while committing to your business growth."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      questions: [
        {
          question: "What if I need technical assistance?",
          answer: "We provide 24/7 support via WhatsApp and email. For urgent issues, you can also schedule a call with our technical team during business hours."
        },
        {
          question: "Is my data secure with Gentle-Tools?",
          answer: "Yes! We use end-to-end encryption and follow strict data protection protocols. Your customer data and business information are completely secure with us."
        },
        {
          question: "Can I use Gentle-Tools on multiple devices?",
          answer: "Yes, you can access your dashboard from any device with an internet connection. However, your WhatsApp connection is tied to one primary device for security."
        }
      ]
    },
    {
      title: "Features & Usage",
      icon: "⚡",
      questions: [
        {
          question: "How many messages can I send per month?",
          answer: "It depends on your plan. Our Starter plan includes 500 messages, Professional includes 2,000, and Business includes 5,000 messages per month. Additional messages can be purchased if needed."
        },
        {
          question: "Can I schedule messages for later?",
          answer: "Yes! Our Professional and Business plans include message scheduling. You can schedule broadcasts for optimal times when your customers are most active."
        },
        {
          question: "Do you provide analytics and reports?",
          answer: "All plans include basic analytics. Professional and Business plans include advanced analytics with customer engagement metrics, message performance, and conversion tracking."
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
        staggerChildren: 0.2
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
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Common Questions
            <span className="text-primary-600"> Answered</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find quick answers to the most common questions about Gentle-Tools.
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
              className="p-6 border border-gray-200 bg-gray-50 rounded-2xl"
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
                      className="flex items-center justify-between w-full p-4 text-left transition-colors duration-300 hover:bg-white"
                    >
                      <span className="pr-4 font-medium text-gray-900">
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
                          <div className="p-4 bg-white border-t border-gray-300">
                            <p className="leading-relaxed text-gray-600">
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

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 border bg-primary-50 rounded-2xl border-primary-200">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Still Have Questions?
            </h3>
            <p className="mb-6 text-gray-600">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-500 hover:bg-primary-600"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-lg hover:border-primary-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;