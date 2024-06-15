import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import BookingItems from '../Bookings/BookingItems';
import Items from '../Items/Items';

const Yamaha = () => {

    const [nameOfBike, setBikeName] = useState(null);

    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes'],
        queryFn: () => fetch('http://localhost:5000/yamahaBike')
            .then(res => res.json())
    });

    const { user } = useContext(AuthContext);

    const { data: users = {} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <>
            <div>

                {
                    bikes.map(bike => <Items
                        key={bike._id}
                        bike={bike}
                        setBikeName={setBikeName}
                        users={users}
                    ></Items>)
                }
            </div>

            <div>
                {
                    nameOfBike &&
                    <BookingItems
                        nameOfBike={nameOfBike}
                    ></BookingItems>
                }
            </div>


        </>
    );
};

export default Yamaha;