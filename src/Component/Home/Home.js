import React from 'react'
// import styled from 'styled-components'
import HeroSection from '../HeroSection/HeroSection'
import Services from '../Services'
import Trusted from '../Trusted'

function Home() {
  const data = {
    name: 'Kirana Store'
  }
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>

  )
}

// const Wrapper = styled.section`
//   height:100vh;
//   background-color:${({theme})=>theme.colors.bg};
// `

export default Home