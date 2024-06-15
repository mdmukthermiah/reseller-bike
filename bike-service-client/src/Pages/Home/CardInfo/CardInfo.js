import React from "react";

const CardInfo = ({ card }) => {
  const { image, name, description,price,Location } = card;
  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title items-center justify-center">{name}</h2>
          <p className="text-center">{description}</p>
          <p className="text-center">Price: {price}</p>
          <p className="text-center">Location: {Location}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-sm btn-primary ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
