// src/components/sections/about/ProblemWeSolve.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProblemWeSolve = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Icons
  const TimeIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const GrowthIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  const CustomerIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const MoneyIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );

  const problems = [
    {
      icon: TimeIcon,
      title: "Time-Consuming Manual Work",
      description: "Business owners spend 4-6 hours daily manually responding to WhatsApp messages, leaving little time for strategic growth.",
      stats: "6+ hours daily wasted",
      impact: "Reduced productivity and burnout"
    },
    {
      icon: CustomerIcon,
      title: "Poor Customer Experience",
      description: "Slow response times and inconsistent messaging lead to frustrated customers and lost sales opportunities.",
      stats: "40% of customers abandon due to slow replies",
      impact: "Decreased customer satisfaction"
    },
    {
      icon: GrowthIcon,
      title: "Limited Scalability",
      description: "Manual processes prevent businesses from scaling efficiently. You can't personally handle thousands of customers.",
      stats: "Growth plateau at 200+ customers",
      impact: "Missed revenue opportunities"
    },
    {
      icon: MoneyIcon,
      title: "High Operational Costs",
      description: "Hiring dedicated staff for customer service is expensive, especially for small and medium businesses.",
      stats: "₦50,000+ monthly for customer service staff",
      impact: "Reduced profit margins"
    }
  ];

  const solutions = [
    {
      title: "Automated Responses",
      description: "Instant replies to common questions, even when you're busy or offline"
    },
    {
      title: "Bulk Messaging",
      description: "Reach all your customers simultaneously with personalized broadcasts"
    },
    {
      title: "Smart Organization",
      description: "Manage contacts, conversations, and products in one centralized dashboard"
    },
    {
      title: "Performance Insights",
      description: "Track what's working and optimize your customer engagement strategy"
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
            THE CHALLENGE
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            The Problems Facing 
            <span className="text-primary-600"> Nigerian Businesses</span>
          </h2>
          <p className="text-lg text-gray-600">
            We understand the daily struggles of running a business in Nigeria. 
            Here are the common challenges we're solving for entrepreneurs like you.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    {problem.title}
                  </h3>
                </div>
              </div>

              <p className="mb-4 leading-relaxed text-gray-600">
                {problem.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-medium">{problem.stats}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>{problem.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-8 bg-gray-50 rounded-2xl md:p-12"
        >
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-green-600 rounded-full bg-green-50">
              OUR SOLUTION
            </div>
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-heading md:text-4xl">
              How Gentle-Tools 
              <span className="text-green-600"> Solves These Problems</span>
            </h3>
            <p className="text-lg text-gray-600">
              We've built intelligent automation tools specifically designed for the unique 
              challenges faced by Nigerian businesses.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1 + (index * 0.1) }}
                className="flex items-start gap-4 p-6 bg-white border border-green-100 rounded-xl"
              >
                <div className="flex items-center justify-center w-8 h-8 mt-1 text-white bg-green-500 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-heading">
                    {solution.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4 }}
            className="max-w-2xl mx-auto mt-12 text-center"
          >
            <div className="p-6 bg-white border border-green-200 rounded-xl">
              <h4 className="mb-3 text-xl font-bold text-gray-900 font-heading">
                The Result? More Time for What Matters
              </h4>
              <p className="text-gray-600">
                Businesses using Gentle-Tools report saving 3-4 hours daily, increasing customer 
                satisfaction by 60%, and growing revenue by up to 200% within months.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.6 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 border border-gray-200 rounded-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Ready to Solve These Problems?
            </h3>
            <p className="mb-6 text-gray-600">
              Join hundreds of Nigerian businesses that have transformed their customer communication.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
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
                See Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemWeSolve;