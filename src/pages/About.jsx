import React from 'react'
import AboutBanner from '../components/banner/AboutBanner'
import MissionVision from '../components/about/MissionVision'
import ProblemWeSolve from '../components/about/ProblemWeSolve'
import OurStory from '../components/about/OurStory'
import OurTeam from '../components/about/OurTeam'
import WhyChooseUs from '../components/about/WhyChooseUs'

const About = () => {
  return (
    <>
      <AboutBanner />
      <MissionVision />
      <ProblemWeSolve />
     <OurStory />
     <OurTeam />
      <WhyChooseUs />
    </>
  )
}

export default About
