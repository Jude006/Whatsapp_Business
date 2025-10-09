// src/components/sections/about/MissionVision.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MissionVision = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Icons
  const MissionIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const VisionIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const ValuesIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const WhyIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const content = {
    mission: {
      icon: MissionIcon,
      title: "Our Mission",
      description: "To democratize access to powerful business automation tools for every Nigerian entrepreneur, enabling them to compete effectively in the digital economy.",
      highlights: [
        "Make automation accessible to all",
        "Empower small businesses",
        "Simplify complex technology",
        "Drive digital transformation"
      ]
    },
    vision: {
      icon: VisionIcon,
      title: "Our Vision",
      description: "A Nigeria where every business, regardless of size, can leverage cutting-edge technology to grow, scale, and serve customers better through seamless automation.",
      highlights: [
        "Technology for all businesses",
        "Nigerian-focused solutions",
        "Sustainable business growth",
        "Digital inclusion"
      ]
    },
    values: {
      icon: ValuesIcon,
      title: "Our Values",
      description: "We're built on principles that guide every decision we make and every feature we build for our community of business owners.",
      items: [
        { name: "Customer First", description: "Your success is our success" },
        { name: "Innovation", description: "Always improving, always evolving" },
        { name: "Simplicity", description: "Powerful tools made simple" },
        { name: "Integrity", description: "Honest and transparent in all we do" }
      ]
    },
    why: {
      icon: WhyIcon,
      title: "Why We Started",
      description: "We saw Nigerian businesses struggling with manual customer communication, missing opportunities, and spending countless hours on repetitive tasks.",
      story: "As a developer and entrepreneur, I (Jude) experienced these challenges firsthand. Gentle-Tools was born from the need to create affordable, powerful solutions that actually work for Nigerian business realities."
    }
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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
            OUR PURPOSE
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Building The Future of 
            <span className="text-primary-600"> Nigerian Business</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're on a mission to transform how Nigerian businesses communicate, 
            automate, and grow through intelligent WhatsApp solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Mission & Vision Side */}
          <div className="space-y-12">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50">
                  <content.mission.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    {content.mission.title}
                  </h3>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed text-gray-600">
                {content.mission.description}
              </p>

              <div className="space-y-3">
                {content.mission.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <span className="text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50">
                  <content.vision.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    {content.vision.title}
                  </h3>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed text-gray-600">
                {content.vision.description}
              </p>

              <div className="space-y-3">
                {content.vision.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <span className="text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values & Why Side */}
          <div className="space-y-12">
            {/* Values Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50">
                  <content.values.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    {content.values.title}
                  </h3>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed text-gray-600">
                {content.values.description}
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {content.values.items.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    className="p-4 rounded-lg bg-primary-50"
                  >
                    <div className="font-semibold text-gray-900">{value.name}</div>
                    <div className="mt-1 text-sm text-gray-600">{value.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why We Started Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50">
                  <content.why.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    {content.why.title}
                  </h3>
                </div>
              </div>
              
              <p className="mb-4 leading-relaxed text-gray-600">
                {content.why.description}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
                className="p-4 italic border-l-4 rounded-r-lg border-primary-500 bg-primary-50"
              >
                <p className="text-gray-700">
                  {content.why.story}
                </p>
                <div className="mt-3 text-sm font-semibold text-primary-600">
                  — Jude, Founder & Developer
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 bg-white border border-gray-200 rounded-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Ready to Join Our Mission?
            </h3>
            <p className="mb-6 text-gray-600">
              Start automating your business today and be part of the Nigerian business revolution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-500 hover:bg-primary-600"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;