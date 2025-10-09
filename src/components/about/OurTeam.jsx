// src/components/sections/about/OurTeam.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const OurTeam = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Team data with 3 members
  const team = [
    {
      name: "Jude Orifa",
      role: "Founder & Full-Stack Developer",
      nickname: "Gentle Dev",
      description: "Passionate about building solutions that solve real Nigerian business problems. Full-stack developer with expertise in MERN stack and Flutter.",
      expertise: ["MERN Stack", "Flutter", "UI/UX Design", "Business Strategy"],
       image: "/images/image.png",
      initial: "J",
      social: {
        twitter: "https://x.com/orifa_jude",
        linkedin: "https://www.linkedin.com/in/jude-orifa-95127b330/",
        github: "https://github.com/Jude006/"
      }
    },
    {
      name: "Boluwatife Adeyemi",
      role: "Mobile App Developer",
      nickname: "T-Dev",
      description: "Expert in Flutter development with a passion for creating seamless mobile experiences. Focused on building scalable cross-platform applications.",
      expertise: ["Flutter", "Dart", "Firebase", "UI/UX"],
      image: "/images/bby1.jpg",
      initial: "B",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Itohan",
      role: "Ui/UX designer",
      nickname: "GodLovesHer",
      description: "Creative designer with a keen eye for user experience. Specializes in creating intuitive interfaces and driving user engagement through strategic marketing.",
      expertise: ["UI/UX Design", "Product Strategy", "Digital Marketing", "Branding"],
      image: "/images/bby1.jpg",
      initial: "C",
      social: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/jude-orifa-95127b330/",
        dribbble: "#"
      }
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Customer First",
      description: "Your success is our ultimate measure of success"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly evolving to serve Nigerian businesses better"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building together with our users and partners"
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "Helping businesses scale beyond limitations"
    }
  ];

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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Image component with fallback
  const TeamImage = ({ member, className }) => {
    return (
      <div className={`relative ${className}`}>
        {/* Fallback avatar with gradient */}
        <div className="flex items-center justify-center w-full h-full shadow-lg bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl">
         <img src={member.image} alt="" className='h-[100%] w-[100%] object-cover rounded-2xl'/>
        </div>
        {/* Online Indicator */}
        <div className="absolute w-3 h-3 bg-green-500 border-2 border-white rounded-full bottom-2 right-2"></div>
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
            MEET THE TEAM
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl font-heading">
            The Minds Behind 
            <span className="text-primary-600"> Gentle-Tools</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're a passionate team dedicated to building tools that empower Nigerian businesses 
            to thrive in the digital age.
          </p>
        </motion.div>

        {/* Team Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col h-full p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-lg"
            >
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto mb-6 w-28 h-28"
              >
                <TeamImage member={member} className="w-full h-full" />
              </motion.div>

              {/* Profile Content */}
              <div className="flex flex-col flex-1 text-center">
                {/* Name & Role */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-heading">
                    {member.name}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-primary-600">
                    {member.nickname}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="flex-1 mb-6 text-sm leading-relaxed text-gray-600">
                  {member.description}
                </p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-semibold tracking-wide text-gray-900 uppercase">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.3 + (skillIndex * 0.1) }}
                        className="px-2 py-1 text-xs rounded-full text-primary-600 bg-primary-50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                  {Object.entries(member.social).map(([platform, link], socialIndex) => (
                    <motion.a
                      key={platform}
                      href={link}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 transition-colors duration-300 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600"
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        {platform === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        )}
                        {platform === 'linkedin' && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        )}
                        {platform === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                        {platform === 'dribbble' && (
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.527 6.5c.822 1.5 1.287 3.192 1.287 4.98 0 1.788-.465 3.48-1.287 4.98-.12.22-.25.44-.39.66-.51.9-1.11 1.74-1.8 2.52-1.65 1.86-3.78 3.24-6.18 3.96-1.41.42-2.88.63-4.38.63-1.5 0-2.97-.21-4.38-.63 1.14-1.32 2.58-2.37 4.23-3.06.84-.35 1.74-.6 2.67-.75.57-.09 1.14-.12 1.71-.12.57 0 1.14.03 1.71.12.93.15 1.83.4 2.67.75 1.65.69 3.09 1.74 4.23 3.06.12-1.14.18-2.31.18-3.48 0-1.17-.06-2.34-.18-3.48zM12 4.5c1.29 0 2.52.24 3.66.69.33.13.66.28.96.45.3.17.6.36.87.57.27.21.51.45.75.69.24.24.45.51.66.78.21.27.39.57.57.87.18.3.33.63.45.96.45 1.14.69 2.37.69 3.66s-.24 2.52-.69 3.66c-.12.33-.27.66-.45.96-.18.3-.36.6-.57.87-.21.27-.45.51-.66.75-.24.24-.51.45-.78.66-.27.21-.57.39-.87.57-.3.18-.63.33-.96.45-1.14.45-2.37.69-3.66.69s-2.52-.24-3.66-.69c-.33-.12-.66-.27-.96-.45-.3-.18-.6-.36-.87-.57-.27-.21-.51-.45-.75-.69-.24-.24-.45-.51-.66-.78-.21-.27-.39-.57-.57-.87-.18-.3-.33-.63-.45-.96-.45-1.14-.69-2.37-.69-3.66s.24-2.52.69-3.66c.12-.33.27-.66.45-.96.18-.3.36-.6.57-.87.21-.27.45-.51.66-.75.24-.24.51-.45.78-.66.27-.21.57-.39.87-.57.3-.18.63-.33.96-.45 1.14-.45 2.37-.69 3.66-.69z"/>
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
              Our 
              <span className="text-primary-600"> Culture & Values</span>
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              The principles that guide everything we build and every decision we make at Gentle-Tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 text-center transition-all duration-300 border border-gray-200 bg-gray-50 rounded-2xl hover:border-primary-200"
              >
                <motion.div 
                  className="mb-4 text-3xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="mb-3 font-semibold text-gray-900 font-heading">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <div className="p-8 border bg-primary-50 rounded-2xl border-primary-200">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 font-heading">
              Want to Join Our Team?
            </h3>
            <p className="mb-6 text-gray-600">
              We're always looking for passionate people to help us build the future of Nigerian business automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-lg bg-primary-500 hover:bg-primary-600"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;