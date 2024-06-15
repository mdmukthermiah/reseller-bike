import React from 'react';
import CardInfo from './CardInfo';
import image1 from '../../../assert/su/su4..png'
import image2 from '../../../assert/yama/yama4..png'
import image3 from '../../../assert/royal/royal4.jpg'
import image4 from '../../../assert/yama/yama3.png'
import image5 from '../../../assert/su/su3.png'
import image6 from '../../../assert/yama/yama4..png'

const InfoCards = () => {

    const cardData = [
        {
            id:1,
            name:'Royal Enfield',
            description:'Royal Enfield manufactures eight bikes which are Petrol powered. Royal Enfield Classic 350 is one of the top Cruiser bikes in India .',
            image:image1,
            price:'$8000',
            Location:'dhaka'
        },
        {
            id:2,
            name:'Suzuki',
            description:'Royal Enfield manufactures eight bikes which are Petrol powered. Royal Enfield Classic 350 is one of the top Cruiser bikes in India.',
            image:image2,
            price:'$8000',
            Location:'dhaka'
        },
         
        {
            id:3,
            name:'Yamaha',
            description:'Royal Enfield manufactures eight bikes which are Petrol powered. Royal Enfield Classic 350 is one of the top Cruiser bikes in India .',
            image:image3,
            price:'$8000',
            Location:'dhaka'
        },
        {
            id:4,
            name:'Gixxer',
            description:' Royal Enfield manufactures eight bikes which are Petrol powered. Royal Enfield Classic 350 is one of the top Cruiser bikes in India .',
            image:image4,
            price:'$8000',
            Location:'dhaka'
        },
        {
            id:5,
            name:'KTM Bike',
            description:' Royal Enfield manufactures eight bikes which are Petrol powered. Royal Enfield Classic 350 is one of the top Cruiser bikes in India.',
            image:image5,
            price:'$8000',
            Location:'dhaka'
        },
        {
            id:6,
            name:'Real Addition',
            description:' Royal Enfield manufactures eight bikes which are Petrol powered. Royal Enfield Classic 350 is one of the top Cruiser bikes in India .',
            image:image6,
            price:'$8000',
            Location:'dhaka'
        },
         
      
       
    ]
    return (
        <div className='grid md:grid-cols-2 mt-20 mb-20 gap-5 text-center sm:grid-cols-1 lg:grid-cols-3'>
            {
                cardData.map(card=><CardInfo
                key={card.id}
                card={card}
                ></CardInfo>)
            }
        </div>
    );
};

export default InfoCards;