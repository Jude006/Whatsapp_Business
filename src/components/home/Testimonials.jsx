// src/components/sections/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const testimonials = [
    {
      name: "Chioma Adebayo",
      business: "Chioma's Boutique, Lagos",
      content: "Gentle-Tools transformed my fashion business. I went from spending 4 hours daily on WhatsApp to just 30 minutes. My sales increased by 200% in 2 months!",
      rating: 5
    },
    {
      name: "Emeka Nwosu",
      business: "Tech Gadgets Store, Abuja",
      content: "The auto-reply feature alone saved my business during peak hours. Customers get instant responses, and I can focus on serving walk-in clients.",
      rating: 5
    },
    {
      name: "Aisha Bello",
      business: "Beauty & Cosmetics, Port Harcourt",
      content: "As a small business owner, I needed affordable tools that work. Gentle-Tools delivered beyond my expectations. The catalog feature is a game-changer!",
      rating: 5
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
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
            TRUSTED BY BUSINESSES
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            Loved by Nigerian 
            <span className="text-primary-600"> Businesses</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how Gentle-Tools is helping businesses across Nigeria grow and automate their customer communication.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative p-8 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              {/* Quote Icon */}
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full -top-3 -left-3 bg-primary-500">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Content */}
              <p className="mb-6 leading-relaxed text-gray-700">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4"
        >
          {[
            { number: "500+", label: "Happy Businesses" },
            { number: "4.9/5", label: "Customer Rating" },
            { number: "98%", label: "Retention Rate" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1 + index * 0.1 }}
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

export default Testimonials;