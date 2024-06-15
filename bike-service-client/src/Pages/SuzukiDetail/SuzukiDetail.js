import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SuzukiDetail = () => {
    const {img,title,sellerName,resalePrice,originalPrice,users,dates,description} = useLoaderData();
    return (
        <div className='items-center justify-center'>
            <div className="card m-20 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{title}</h2>
          <p>Seller-Name: {sellerName}</p>
          <p>Description: {description}</p>
          <p>ResalePrice: {resalePrice}</p>
          <p>originalPrice: {originalPrice}</p>
          <p>Years-of-use: {users}</p>
          <p>Post-date:{dates}</p>
        </div>
      </div>
      
        </div>
  
    );
};

export default SuzukiDetail;