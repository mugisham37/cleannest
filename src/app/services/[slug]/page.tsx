import React from 'react'
import Service from '@/src/components/services/slug/service'
import Process from '@/src/components/services/slug/process'
import Testimonial from '@/src/components/testimonial'
import More from '@/src/components/services/slug/more'
import Faq from '@/src/components/faq'

const page = () => {
  return (
    <>
      <Service />
      <Process />
      <Testimonial />
      <More />
      <Faq />
    </>
  )
}

export default page