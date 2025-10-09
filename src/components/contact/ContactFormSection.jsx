// src/components/sections/contact/ContactFormSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactFormSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@gentle-tools.com",
      description: "Send us a detailed message and we'll respond within 2 hours",
      action: "mailto:hello@gentle-tools.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+234 901 234 5678",
      description: "Mon - Fri, 9AM - 6PM WAT. Speak directly with our team",
      action: "tel:+2349012345678"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+234 901 234 5678",
      description: "24/7 support via WhatsApp. Get instant responses",
      action: "https://wa.me/2349012345678"
    },
    {
      icon: "📍",
      title: "Office",
      details: "Lagos, Nigeria",
      description: "Virtual office serving businesses across Nigeria",
      action: "#"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
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
            GET IN TOUCH
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Send Us a 
            <span className="text-primary-600"> Message</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? We're here to help you get the most out of Gentle-Tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                Other Ways to Reach Us
              </h3>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start gap-4 p-4 transition-all duration-300 bg-white border border-gray-200 rounded-2xl hover:border-primary-300 hover:shadow-md group"
                >
                  <div className="flex items-center justify-center w-12 h-12 text-2xl transition-colors duration-300 bg-primary-50 rounded-xl group-hover:bg-primary-100">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 font-heading">
                      {method.title}
                    </h4>
                    <p className="font-medium text-primary-600">
                      {method.details}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-white border border-gray-200 rounded-2xl"
            >
              <h4 className="mb-4 text-lg font-semibold text-gray-900 font-heading">
                Office Hours
              </h4>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="p-6 border bg-primary-50 border-primary-200 rounded-2xl"
            >
              <h4 className="mb-4 text-lg font-semibold text-gray-900 font-heading">
                Quick Help
              </h4>
              <div className="space-y-2">
                {[
                  "How to set up auto-replies",
                  "Bulk messaging guide",
                  "Pricing plans explained",
                  "Account setup tutorial"
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block transition-colors duration-300 text-primary-600 hover:text-primary-700"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block mb-2 text-sm font-medium text-gray-700">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 font-semibold text-white transition-colors duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
              >
                Send Message
              </motion.button>

              <p className="text-sm text-center text-gray-600">
                We typically respond within 2 hours during business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;