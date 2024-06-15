import React from "react";
import img1 from "../../../assert/banner/moto.jpg";
import InfoCards from "../CardInfo/InfoCards";

const About = () => {
  return (
    <div>
      <div>
       <InfoCards></InfoCards>
      </div>
      <div>
        <div className="hero w-full mb-10 mt-10 rounded-lg px-12 py-12 text-black bg-gray-300">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img1} alt="" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Bike Servicing Shop</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Booking Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
