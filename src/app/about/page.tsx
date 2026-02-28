import React from 'react'
import About from '@/src/components/about/about'
import Team from '@/src/components/about/team'
import Testimonial from '@/src/components/testimonial'
import Join from '@/src/components/about/join'

const page = () => {
  return (
    <>
      <About />
      <Team />
      <Testimonial />
      <Join />
    </>
  )
}

export default page