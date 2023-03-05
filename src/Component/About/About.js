import React from 'react'
import { useProductCotext } from '../../context/productContext';
import HeroSection from '../HeroSection/HeroSection'

export default function About() {
  const data = {
    name:'E-commerce Store'
  }

  const {myName}  = useProductCotext()

  return (
    <>
    {myName}
     <HeroSection myData={data}/>
    </>
   
  )
}
