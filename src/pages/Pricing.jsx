import React from 'react'
import PricingBanner from '../components/banner/PricingBanner'
import PricingPlans from '../components/pricing/PricingPlans'
import FeatureComparison from '../components/pricing/FeatureComparison'
import PricingFAQ from '../components/pricing/PricingFaq'

const Pricing = () => {
  return (
    <>
      <PricingBanner />
      <PricingPlans />
      <FeatureComparison />
      <PricingFAQ />
    </>
  )
}

export default Pricing


//  <PricingPlans />
//       <FeatureComparison />
//       <PricingFAQ />