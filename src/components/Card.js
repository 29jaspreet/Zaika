import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart , useCart } from './ContextReducer';

const Card = (props) => {

let data = useCart();
let dispatch = useDispatchCart();
  let options=props.options;
  let priceoptions = Object.keys(options);
  const [qty , setQty] = useState(1);
  const [size , setSize] = useState("");
const priceRef = useRef();
useEffect(()=>{
  setSize(priceRef.current.value)
},[])

  const handleAddtoCart= async ()=>{
    await dispatch({type:"ADD",id:props.foodItem._id , name:props.foodItem.name , price:finalPrice ,qty:qty, size :size} )
    
    console.log(data);
      }


      let finalPrice =qty * parseInt(options[size]);

  return (
    <div>
          <div className="card mt-3" style={{ width: "19rem" , "maxHeight" :"400px"  }}>
          <img src= {props.foodItem.img} className="card-img-top" alt="..."  style={{ "height": "150px", "objectFit":"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">
              order quickly
            </p>
            <div className="container w-100">
                  <select className="m-1 h-100  bg-success rounded" onChange={(e)=> setQty(e.target.value)}>
                    {
                        Array.from(Array(6) ,(e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>

                            )
                        })
                    }
                  </select>
                  <select className="m-2 h-100 w-30 bg-success rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                       {priceoptions.map((data)=>{
                        return <option key={data} value ={data}>{data}</option>
                       })}

                  </select>
                 <div className='d-inline h-100 fs-5'>
                    Rs.{finalPrice}/-
                 </div>
                  

            </div>
            <hr></hr>
            <button className={'btn bg-success justify-center ms-2'} onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default Card
