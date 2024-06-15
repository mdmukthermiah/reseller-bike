import React from "react";
import image from '../../../assert/banner/banner1.webp'

import './Banner.css'


const Banner = () => {

  return (
    <div className="carousel-item relative w-full">
    <div className="carousel-img w-full">
      <img src={image} alt="" className="w-full rounded-lg" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h2 className="text-6xl ml-24 mb-72 font-bold text-white">
        All You Need <br />
        To Know About <br />
        the Bike
      </h2>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <p className="text-white font-semibold ml-24 mt-20 text-lg">
        The best rough and tough bike range in India includes <br /> Royal
        Enfield, Gixxer, Suzuki{" "}
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <button className="btn btn-primary mt-72 ml-24">Selected</button>
    </div>
  </div>
  );
};

export default Banner;
