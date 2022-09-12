import React from 'react'
import Common from './Common';
import web from "../Images/img1.jpg";

function Home() {
  return (
   <Common
    name="Grow your Business with "
    imgsrc={web}
    visit="/contact"
    btname="Get Started"
   />
  )
}

export default Home