import React from 'react'
import Common from './Common';
import web1 from "../Images/img2.png";

function About() {
  return (
   <Common
    
    name="Welcome to About Page"
    imgsrc={web1}
    visit="/contact"
    btname="Contact Now"
   />
  )
}

export default About;