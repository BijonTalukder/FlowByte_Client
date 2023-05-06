import React from 'react';
import banner1 from '../../../asset/banner1.jpg'
import banner2 from '../../../asset/banner2.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-4/6">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1}  className="w-full h-3/4" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full  h-3/4" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.sam-solutions.com/blog/wp-content/uploads/2020/05/Mobile-ecommerce-app-704x454-min.png" className="w-full  h-3/4" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 


</div>
    );
};

export default Banner;