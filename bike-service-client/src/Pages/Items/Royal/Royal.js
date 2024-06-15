import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingItems from '../Bookings/BookingItems';
import Items from '../Items/Items';

const Royal = () => {
    const [nameOfBike, setBikeName] = useState(null);

    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes'],
        queryFn: () => fetch('http://localhost:5000/royalBikes')
            .then(res => res.json())
    })
    return (
        <>
        <div>
            {
                bikes.map(bike => <Items
                    key={bike._id}
                    bike={bike}
                    setBikeName={setBikeName}
                ></Items>)
            }
        </div>
        {
            nameOfBike &&
            <BookingItems
                nameOfBike={nameOfBike}
            ></BookingItems>
        }


    </>
    );
};

export default Royal;