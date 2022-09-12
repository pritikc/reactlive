import React from 'react'
import { NavLink } from 'react-router-dom'
// import web from "../Images/img1.jpg";
// K:\PrityWork\React\porfolio\src\Images\img1.jpg

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        
      <div className="container">
        <div className=" row">
          <div className="col-12 mx-auto">
        <div className="row">

          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>{props.name}  <br/> 
            <strong className=" brand-name">Priti Chauhan</strong></h1>
            <h2 className="my-3">We are team of talented  designer and developer making website</h2>
            <div className="mt-3">
             <NavLink to={props.visit} className="btn-get-started">
            {props.btname}
             </NavLink>
              
            </div>
          </div>
         
          <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="img" />
          </div>



          </div>
          </div>
          </div>
          </div>

      </section>
    </>
  )
}

export default Common