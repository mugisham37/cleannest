import React from 'react'
import Hero from '@/src/components/landing/hero'
import Solution from '@/src/components/landing/solution'
import Overview from '@/src/components/overview'
import Categories from '@/src/components/landing/categories'
import Impact from '@/src/components/landing/impact'
import Cta from '@/src/components/cta'
import Testimonial from '@/src/components/testimonial'
import Blog from '@/src/components/landing/blog'
import Faq from '@/src/components/faq'

const page = () => {
  return (
    <>
      <Hero />
      <Solution />
      <Overview />
      <Categories />
      <Impact />
      <Cta />
      <Testimonial />
      <Blog />
      <Faq />
    </>
  )
}

export default page