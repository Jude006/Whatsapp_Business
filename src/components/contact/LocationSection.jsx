// src/components/sections/contact/LocationSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LocationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Service areas across Nigeria
  const serviceAreas = [
    {
      region: "Lagos",
      cities: ["Victoria Island", "Lekki", "Ikeja", "Surulere", "Yaba"],
      status: "active"
    },
    {
      region: "Abuja",
      cities: ["Maitama", "Garki", "Wuse", "Asokoro", "Gwarinpa"],
      status: "active"
    },
    {
      region: "Port Harcourt",
      cities: ["GRA", "Trans-Amadi", "Rumuola", "Old GRA"],
      status: "active"
    },
    {
      region: "Ibadan",
      cities: ["Bodija", "Iwo Road", "Mokola", "UI Area"],
      status: "active"
    },
    {
      region: "Kano",
      cities: ["Nasarawa GRA", "Bompai", "Sabon Gari"],
      status: "active"
    },
    {
      region: "Enugu",
      cities: ["GRA", "Independence Layout", "New Haven"],
      status: "active"
    }
  ];

  // Office details
  const officeDetails = [
    {
      icon: "📍",
      title: "Main Office",
      address: "Lagos, Nigeria",
      description: "Virtual office serving businesses across Nigeria",
      hours: "Mon - Fri: 9AM - 6PM"
    },
    {
      icon: "🌍",
      title: "Service Coverage",
      address: "Nationwide",
      description: "Serving all 36 states in Nigeria",
      hours: "24/7 Online Support"
    },
    {
      icon: "🚀",
      title: "Launch Partners",
      address: "500+ Businesses",
      description: "Trusted by businesses across major Nigerian cities",
      hours: "Growing Daily"
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
            OUR REACH
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Serving Businesses
            <span className="text-primary-600"> Across Nigeria</span>
          </h2>
          <p className="text-lg text-gray-600">
            While we're based in Lagos, our tools and support are available to businesses 
            in every corner of Nigeria. No matter your location, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Office Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Office Details Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                Our Presence
              </h3>
              {officeDetails.map((office, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 text-2xl bg-primary-50 rounded-xl">
                      {office.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 font-heading">
                        {office.title}
                      </h4>
                      <p className="mt-1 font-medium text-primary-600">
                        {office.address}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {office.description}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {office.hours}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Virtual Office Benefits */}
            <motion.div
              variants={itemVariants}
              className="p-6 border bg-primary-50 border-primary-200 rounded-2xl"
            >
              <h4 className="mb-4 text-lg font-semibold text-gray-900 font-heading">
                Why Virtual Office?
              </h4>
              <div className="space-y-3">
                {[
                  "🌐 Serve customers nationwide from anywhere",
                  "💻 Access your dashboard 24/7 from any device",
                  "📞 Get support via WhatsApp, email, or phone",
                  "🚀 No geographical limitations for your business",
                  "💰 Cost-effective compared to physical offices"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Service Areas Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 font-heading">
                Service Areas
              </h3>
              
              {/* Nigeria Map Visualization */}
              <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl">
                <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                  {/* Simplified Nigeria Map Outline */}
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full bg-primary-200 opacity-20"></div>
                    <div className="absolute w-6 h-6 rounded-full top-4 left-8 bg-primary-500 animate-pulse">
                      <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded-lg -top-8 left-1/2 bg-primary-600 whitespace-nowrap">
                        Lagos
                      </div>
                    </div>
                    <div className="absolute w-4 h-4 rounded-full top-16 left-20 bg-primary-400">
                      <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded-lg -top-6 left-1/2 bg-primary-500">
                        Abuja
                      </div>
                    </div>
                    <div className="absolute w-5 h-5 rounded-full bottom-12 left-12 bg-primary-400">
                      <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded-lg -top-6 left-1/2 bg-primary-500">
                        Port Harcourt
                      </div>
                    </div>
                    <div className="absolute w-4 h-4 rounded-full top-20 left-4 bg-primary-300">
                      <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded-lg -top-6 left-1/2 bg-primary-400">
                        Ibadan
                      </div>
                    </div>
                    <div className="absolute w-4 h-4 rounded-full top-8 right-12 bg-primary-300">
                      <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded-lg -top-6 left-1/2 bg-primary-400">
                        Kano
                      </div>
                    </div>
                    <div className="absolute w-4 h-4 rounded-full bottom-8 right-8 bg-primary-300">
                      <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 rounded-lg -top-6 left-1/2 bg-primary-400">
                        Enugu
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute text-center transform -translate-x-1/2 bottom-4 left-1/2">
                    <p className="text-sm font-medium text-gray-600">
                      Serving All 36 States
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas List */}
              <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="p-4 transition-colors duration-300 bg-white border border-gray-200 rounded-xl hover:border-primary-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{area.region}</h4>
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Active
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {area.cities.map((city, cityIndex) => (
                        <span
                          key={cityIndex}
                          className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Support Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <h4 className="mb-4 text-lg font-semibold text-gray-900 font-heading">
                Support Coverage
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-green-600">Under 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Support Channels</span>
                  <span className="font-semibold text-gray-900">WhatsApp, Email, Phone</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold text-green-600">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Languages</span>
                  <span className="font-semibold text-gray-900">English, Pidgin</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Ready to Grow Your Business?
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-gray-600">
              No matter where you are in Nigeria, Gentle-Tools can help you automate your 
              customer communication and scale your business.
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
                Talk to Sales
              </motion.button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Serving businesses in Lagos, Abuja, Port Harcourt, Ibadan, Kano, Enugu, and all across Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;