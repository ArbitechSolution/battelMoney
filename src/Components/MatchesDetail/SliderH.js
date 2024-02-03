import React from "react";
import new1 from "../../Media/new1.png";
import new2 from "../../Media/new2.jpeg";
import new3 from "../../Media/new3.jpg";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const SliderH = () => {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    prevArrow: false, 
    nextArrow: false, 
    

   
  };
  
  return (
    
      <div className="card slider-card bg-black">
      <Slider {...settings}>
      
      <img src={new1} alt="img" className=" slider-img img-fluid" />
        <img src={new2} alt="img" className="slider-img img-fluid" />
        <img src={new3} alt="img" className="slider-img img-fluid" />
       
  
      </Slider>

      </div>
    


  )
}

export default SliderH
