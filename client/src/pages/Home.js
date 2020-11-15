import React from 'react'
import Hero from '../components/home/Hero'
import FindingTheRightCBD from '../components/home/FindingTheRightCBD'
import Features from '../components/home/Features'
import DataMatching from '../components/home/DataMatching'
import HowItWorks from '../components/home/HowItWorks'
import PersonalizedSubscription from '../components/home/PersonalizedSubscription'


const Home = () => {
  return (
    <>
      <Hero />
      <FindingTheRightCBD />
      <Features />
      <DataMatching />
      <HowItWorks />
      <PersonalizedSubscription />
    </>
  )
}
export default Home
