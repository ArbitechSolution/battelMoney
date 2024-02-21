import React from 'react';
// import teenpatti from "../../Media/TP2020.webp";
import MiancardData from './MaincardData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

const Maincard = () => {
    const settings = {
        vertical: true,
        verticalSwiping: true,
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
    <Slider {...settings}>
    {
        MiancardData.map((currElem)=>{
            return (
                <div key={currElem.id} className='row maincard-div ms-2 mt-2'>
        <div className='col-12'>
            <div className='card maincard '>
                <div className='card-img-div  mt-5'>
                    <img className='img-fluid' src={currElem.imgsrc} alt="."/>

                </div>
                <div className='overlay'>
                    <div className=''>
                        <h2 className='mt-5 ms-3'>{currElem.title}</h2>
                       <NavLink to={currElem.link}>
                       <button className='mt-4 maincard-btn ms-3'>
                            Play Now
                        </button>

                       </NavLink>
                        

                        

                    </div>

                </div>
                

            </div>

        </div>
        

    </div>

            )
        })
    }

    </Slider>
    
  )
}

export default Maincard