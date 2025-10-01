// src/components/banner/HeroBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  // SVG Icons as components to avoid import issues
  const SparkleIcon = () => (
    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );

  const MessageIcon = () => (
    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );

  const ChartIcon = () => (
    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  const RocketIcon = () => (
    <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176v-8.004h-3.329zm-2.54 4.928l-7.485 7.486 7.485 7.486 1.431-1.43-5.465-5.466 5.465-5.467-1.431-1.43zm10.515 3.072v8.004l-6.176 6.176 2.847 2.828h3.329v-17.008h-3.329z"/>
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Orbs */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 rounded-full top-20 left-10 bg-primary-200/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-accent-400/10 blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,92,77,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(2,92,77,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 py-20 lg:flex-row lg:gap-8 lg:py-28">
          {/* Left Content - Text & CTA */}
          <div className="flex-1 max-w-2xl text-center lg:text-left lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 font-medium border rounded-full bg-primary-50 border-primary-200 text-primary-700"
              >
                <SparkleIcon />
                <span>Trusted by 500+ Nigerian Businesses</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary-500"
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl font-heading"
              >
                Supercharge Your
                <span className="block mt-2">
                  <span className="text-transparent bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text">
                    WhatsApp Business
                  </span>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl"
              >
                Automate customer conversations, send bulk messages, and grow your revenue with 
                <span className="font-semibold text-primary-600"> AI-powered WhatsApp tools</span> built for Nigerian entrepreneurs.
              </motion.p>

              {/* Feature Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid max-w-md grid-cols-2 gap-4 mx-auto mb-8 lg:mx-0"
              >
                {[
                  "Bulk Messaging",
                  "Auto Replies", 
                  "Product Catalog",
                  "Analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckIcon />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row lg:justify-start"
              >
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl shadow-primary-500/25 hover:shadow-primary-500/40"
                  >
                    <span>Start Free Trial</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowIcon />
                    </motion.div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent"></div>
                  </motion.button>
                </Link>
                
                <Link to="/demo">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-6 py-4 font-semibold text-gray-700 transition-all duration-300 border shadow-lg group bg-white/80 backdrop-blur-sm border-gray-300/50 rounded-xl hover:border-primary-300 hover:bg-white hover:shadow-xl"
                  >
                    <div className="relative">
                      <WhatsAppIcon />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-2 h-2 bg-green-500 rounded-full -top-1 -right-1"
                      />
                    </div>
                    Live Demo
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="grid max-w-xl grid-cols-2 gap-6 lg:grid-cols-4"
              >
                {[
                  { icon: UsersIcon, number: "500+", label: "Businesses" },
                  { icon: MessageIcon, number: "1M+", label: "Messages" },
                  { icon: ChartIcon, number: "98%", label: "Delivery" },
                  { icon: ClockIcon, number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-4 text-center transition-all duration-300 border shadow-sm rounded-2xl bg-white/60 backdrop-blur-sm border-gray-200/50 hover:shadow-md"
                  >
                    <stat.icon />
                    <div className="mt-2 text-xl font-bold text-gray-900 font-heading">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - WhatsApp Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative flex justify-center flex-1 lg:justify-end"
          >
            <div className="relative max-w-md">
              {/* Main Chat Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* WhatsApp Chat Preview */}
                <div className="w-80 bg-[#e5ddd5] rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                  {/* Header */}
                  <div className="p-4 text-white bg-primary-600">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                        <WhatsAppIcon />
                      </div>
                      <div>
                        <div className="font-semibold">Your Business</div>
                        <div className="text-xs opacity-80">Online • WhatsApp</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 bg-gradient-to-b from-[#e5ddd5] to-[#d6ccc4]">
                    {/* Incoming message */}
                    <div className="flex justify-start">
                      <div className="max-w-xs px-4 py-2 bg-white rounded-tl-none shadow-sm rounded-2xl">
                        <div className="text-gray-800">How much for the blue dress?</div>
                        <div className="mt-1 text-xs text-right text-gray-500">10:30 AM</div>
                      </div>
                    </div>
                    
                    {/* Auto-reply message */}
                    <div className="flex justify-end">
                      <div className="max-w-xs px-4 py-2 rounded-tr-none shadow-sm bg-primary-100 rounded-2xl">
                        <div className="text-gray-800">The blue dress is ₦15,000 💙</div>
                        <div className="flex items-center justify-end gap-1 mt-1 text-xs text-right text-gray-500">
                          10:30 AM
                          <CheckIcon />
                        </div>
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="px-4 py-3 bg-white rounded-tl-none shadow-sm rounded-2xl">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((dot) => (
                            <motion.div
                              key={dot}
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360, y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute flex items-center justify-center w-20 h-20 border rounded-full -top-6 -right-6 bg-accent-400/20 backdrop-blur-sm border-accent-400/30"
              >
                <RocketIcon />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360, y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute flex items-center justify-center w-16 h-16 border rounded-full -bottom-8 -left-8 bg-primary-400/20 backdrop-blur-sm border-primary-400/30"
              >
                <StarIcon />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
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

export default HeroBanner;