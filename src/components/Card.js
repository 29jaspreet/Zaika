import React from 'react'

const Card = (props) => {
  const handleAddtoCart= ()=>{

  }

  let options=props.options;
  let priceoptions = Object.keys(options);
  return (
    <div>
          <div className="card mt-3" style={{ width: "19rem" , "maxHeight" :"400px"  }}>
          <img src= {props.imgSrc} className="card-img-top" alt="..."  style={{ "height": "150px", "objectFit":"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">
              order quickly
            </p>
            <div className="container w-100">
                  <select className="m-1 h-100  bg-success rounded">
                    {
                        Array.from(Array(6) ,(e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>

                            )
                        })
                    }
                  </select>
                  <select className="m-2 h-100 w-30 bg-success rounded">
                       {priceoptions.map((data)=>{
                        return <option key={data} value ={data}>{data}</option>
                       })}

                  </select>
                 
                    Total Price
                  

            </div>
            <hr></hr>
            <button className={'btn bg-success justify-center ms-2'} onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Card
