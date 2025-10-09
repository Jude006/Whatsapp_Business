// src/components/sections/about/OurStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const OurStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Timeline data
  const timeline = [
    {
      year: "2023",
      title: "The Spark",
      description: "As a developer and entrepreneur, I experienced firsthand the challenges of managing customer communication on WhatsApp while running multiple businesses.",
      icon: "💡"
    },
    {
      year: "2024",
      title: "The Solution",
      description: "Built the first version of Gentle-Tools to automate my own business processes. The results were incredible - saving 4+ hours daily.",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "The Launch",
      description: "Shared the tool with other Nigerian business owners. The overwhelming positive response confirmed we had something special.",
      icon: "🎯"
    },
    {
      year: "Present",
      title: "The Mission",
      description: "Now serving 500+ businesses across Nigeria, helping them automate, grow, and compete in the digital economy.",
      icon: "🌟"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
            OUR JOURNEY
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            From Personal Struggle to 
            <span className="text-primary-600"> Business Solution</span>
          </h2>
          <p className="text-lg text-gray-600">
            The story of how Gentle-Tools evolved from a personal need into a platform 
            empowering hundreds of Nigerian businesses.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Founder Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Founder Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600">
                    <span className="text-xl font-bold text-white font-heading">J</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Jude Orifa</h3>
                  <p className="text-gray-600">Founder & Developer</p>
                  <p className="text-sm text-primary-600">@GentleDev</p>
                </div>
              </div>

              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  "As a full-stack developer and entrepreneur, I found myself spending countless hours 
                  on WhatsApp responding to customer inquiries for my various business ventures."
                </p>
                <p>
                  "The turning point came when I missed an important business opportunity because 
                  I was busy typing the same responses to different customers."
                </p>
                <p>
                  "I built Gentle-Tools initially for myself, but when I saw how much time it saved 
                  and how it transformed my business, I knew I had to share it with other Nigerian entrepreneurs."
                </p>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="p-6 border bg-primary-50 border-primary-200 rounded-2xl"
            >
              <h4 className="mb-3 text-lg font-semibold text-gray-900 font-heading">
                Our Commitment
              </h4>
              <p className="text-gray-700">
                "We're committed to building tools that actually work for Nigerian businesses. 
                No complex setups, no foreign pricing - just powerful automation made simple and affordable."
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-primary-500">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-sm font-medium rounded-full text-primary-600 bg-primary-100">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 font-heading">
                        {item.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4"
        >
          {[
            { number: "500+", label: "Businesses Empowered" },
            { number: "4+", label: "Hours Saved Daily" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "200%", label: "Revenue Growth" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1.4 + (index * 0.1) }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gray-900 font-heading">{stat.number}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;