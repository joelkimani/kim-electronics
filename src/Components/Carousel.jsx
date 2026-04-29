import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel=()=>{
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images1/advert1.webp" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="images1/advert2.webp" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="images1/advert3.webp" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
  
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
  
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
    )
}

export default MyCarousel;