import React from 'react'
import HeroSection from '../HeroSection/HeroSection'

export default function About() {
  const data = {
    name:'E-commerce Store'
  }
  return (
    <HeroSection myData={data}/>
  )
}
