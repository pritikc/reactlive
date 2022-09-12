import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Service() {
  return (
    <>
      <div className="my-5">
      <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 mx-auto">
        <div className="row gy-4">
            {
              Sdata.map((val, ind) =>{   //sdata with map function for get array data
                return <Card key={ind}  //card  // key imp for map fun
                  imgsrc={val.imgsrc}
                  title={val.title}
                />

              })
            }
        </div>
        </div>
        </div>

      </div>
    </>
  )
}

export default Service