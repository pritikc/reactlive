import React, { useState } from 'react'

const Contact = () => {

 
  const [data, setData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
  });

  const InputEvent = (event) => {
    const { name, value} =event.target;

    setData((preVal) => {  //you can see the value when u fill in inspect > components hooks
        return{
          ...preVal,
          [name] : value,
        }
    })
  };
 
  const formSubmit = (e) => {
    e.preventDefault(); //with this our page is not refresh

    alert(`My name is ${data.name} . My Phone Numberis ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}.`)
  }

  return (
   <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container">
    <div className="row contact-div">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={data.name } onChange={InputEvent} placeholder="Enter your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email } onChange={InputEvent} placeholder="Enter your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone } onChange={InputEvent} placeholder="Enter your Phone Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message } onChange={InputEvent} ></textarea>
        </div>
        <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
        </form>
      </div>

    </div>

    </div>
   </>
  )
}

export default Contact