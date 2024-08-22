import React from 'react'

const Card = () => {
  return (
    <div>
          <div className="card mt-3" style={{ width: "18rem" , "maxHeight" :"360px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyK7iVD1XjH5Ko4C4KHHCkyOy4FGmVT-m29w&s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              order quickly
            </p>
            <div className="container w-100">
                  <select className="m-2 h-100  bg-success rounded">
                    {
                        Array.from(Array(6) ,(e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>

                            )
                        })
                    }
                  </select>
                  <select className="m-2 h-100 w-50 bg-success rounded">
                        <option value="half">Half</option>
                        <option value="full">Full</option>

                  </select>
                  <div>
                    Total Price
                  </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
