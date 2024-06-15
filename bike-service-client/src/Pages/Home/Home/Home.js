import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';

import InfoCards from '../CardInfo/InfoCards';
import Categories from '../Category/Categories';

const Home = () => {
    return (
        <div className='mx-10'>
           <Banner></Banner>
           <Categories></Categories>
           <Brands></Brands>
           <InfoCards></InfoCards>
           <About></About>
        </div>
    );
};

export default Home;