import React from 'react'
import Services from '@/src/components/services/services'
import Cta from '@/src/components/cta'
import Overview from '@/src/components/overview'
import Testimonial from '@/src/components/testimonial'

const page = () => {
  return (
    <>
      <Services />
      <Cta />
      <Overview />
      <Testimonial />
    </>
  )
}

export default page