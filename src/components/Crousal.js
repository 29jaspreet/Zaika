import React from 'react'

const Crousal = () => {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain', overflow:"hidden"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption m-3" style={{zIndex:"10" }}>
        <h1 style={{color:"white" ,marginTop:"-190px" , fontWeight:"200" , fontSize:"70px"}}>Taste the essence with Zaika</h1>
        <h1> </h1>
    <form className="d-flex">
      <input className="form-control me-2 m-3" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn outline-success bg-success color-white m-3" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="d-block w-100"  style={{filter :"brightness(50%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1609957072860-18eac566fa73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter :"brightness(50%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1694506374740-24176e5222e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{filter :"brightness(50%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Crousal
