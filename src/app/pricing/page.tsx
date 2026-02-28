import React from 'react'
import Hero from '@/src/components/pricing/hero'
import Pricing from '@/src/components/pricing/pricing'
import More from '@/src/components/more'
import Faq from '@/src/components/faq'

const page = () => {
  return (
    <>
      <Hero />
      <Pricing />
      <More />
      <Faq />
    </>
  )
}

export default page