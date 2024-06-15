import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ bike, setBikeName }) => {

    return (

        <>
            <div className="hero mb-5 w-3/4 ml-32 border shadow-xl border-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bike.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold"> {bike.title}</h1>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-content-between gap-4'>
                            <div className="py-6 text-xl w-80">
                                <p>Address : {bike.location}</p>
                                <p>Original Price : {bike.originalPrice}</p>
                                <p>Current Price : <span className='font-bold'> {bike.resalePrice}</span></p>
                            </div>
                            <div className="py-6 text-xl w-80">
                                <p>User : {bike.user}</p>
                                <p>Posted : {bike.dates}</p>
                                <p>Owner name : <span className='font-bold'>{bike.sellerName}</span></p>
                            </div>

                        </div>
                        <div className='flex justify-between'>
                            <div>

                                <label
                                    htmlFor="booking-modal"
                                    className="btn btn-outline hover:bg-[#ff4605]"
                                    onClick={() => setBikeName(bike)}
                                >Book Now</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    );
};

export default Items;