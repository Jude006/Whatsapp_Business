import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactBanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const contactMethods = [
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our team",
      availability: "Available 24/7"
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 2 hours"
    },
    {
      icon: "📞",
      title: "Phone Call",
      description: "Speak directly with our team",
      availability: "Mon - Fri, 9AM - 6PM"
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 bg-primary-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-80 h-80 bg-primary-100 blur-3xl opacity-30"></div>
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
            <span>GET IN TOUCH</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl font-heading"
          >
            Let's Start a
            <span className="block mt-2">
              <span className="text-primary-600">Conversation</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            Have questions about Gentle-Tools? Need help getting started? 
            Our team is here to help you succeed. Reach out to us through any of the channels below.
          </motion.p>

          {/* Contact Methods Grid */}
          <motion.div
            variants={itemVariants}
            className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mb-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 text-center transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{method.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 font-heading">
                  {method.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600">
                  {method.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-green-600 rounded-full bg-green-50">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {method.availability}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid max-w-2xl grid-cols-2 gap-8 mx-auto md:grid-cols-4"
          >
            {[
              { number: "24/7", label: "Support" },
              { number: "2h", label: "Avg. Response" },
              { number: "98%", label: "Satisfaction" },
              { number: "500+", label: "Businesses" }
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

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="p-8 border bg-primary-50 rounded-2xl border-primary-200">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
                Ready to Get Started?
              </h3>
              <p className="mb-6 text-gray-600">
                Start your free trial today and see how Gentle-Tools can transform your business communication.
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
                  Schedule a Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="mb-2 text-sm">Scroll to contact form</span>
          <div className="flex justify-center w-6 h-10 border-2 border-gray-300 rounded-full">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 mt-2 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactBanner;