import React from 'react';
import AllBuyers from './AllBuyers';
import AllSellers from './AllSellers';

const AllUsers = () => {
    return (
        <div>
            <h1 className='text-5xl text-center'>Buyers</h1>
            <AllBuyers></AllBuyers>

            <h1 className='text-5xl text-center'>Sellers</h1>
            <AllSellers></AllSellers>

        </div>
    );
};

export default AllUsers;