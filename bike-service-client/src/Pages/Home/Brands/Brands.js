import React from 'react';

const Brands = () => {
    return (
           <div className='text-center items-center justify-center bg-gray-200 p-12 rounded-lg'>
           <div className=''>
                <h2 className='text-3xl font-bold text-black mb-10 rounded-xl'><i className='text-orange-600'>many popular Brands <br/>name In the World</i></h2>
           </div>
           <div className='flex text-center items-center justify-center'>
        <h3 className="text-3xl mr-5 text-purple-500 font-bold"><i>Yamaha</i></h3>
        <h3 className="text-3xl mr-5 text-warning font-bold"><i>Royal Enfield</i> </h3>
        <h3 className="text-3xl mr-5 text-lime-600 font-bold"><i>Hero</i></h3>
        <h3 className="text-3xl mr-5 text-orange-500 font-bold"><i>TVS Raider</i></h3>
        <h3 className="text-3xl mr-5 text-violet-400 font-bold"><i>Suzuki Gixxer</i></h3>
            </div>
           </div>
        
    );
};

export default Brands;
