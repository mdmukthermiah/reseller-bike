import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import SellerLink from '../../Shared/SellerLink/SellerLink';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: myBike1 = [] } = useQuery({
        queryKey: ['myBike1'],
        queryFn: () => fetch(`http://localhost:5000/myRoyal?sellerName=${user.displayName}`)
            .then(res => res.json())
    });

    const { data: myBike2 = [] } = useQuery({
        queryKey: ['myBike2'],
        queryFn: () => fetch(`http://localhost:5000/mySuzuki?sellerName=${user.displayName}`)
            .then(res => res.json())
    });

    const { data: myBike3 = [] } = useQuery({
        queryKey: ['myBike3'],
        queryFn: () => fetch(`http://localhost:5000/myYamaha?sellerName=${user.displayName}`)
            .then(res => res.json())
    });

    console.log(myBike1, myBike2, myBike3);

    const merged = [...myBike1, ...myBike2, ...myBike3];
    console.log(merged)

    return (
        <div>
            <SellerLink></SellerLink>
            <div className='mb-[500px]'>
                <h3 className="text-3xl text-center">My Orders</h3>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                merged?.map((book, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td><img className='w-20' src={book.img} alt="" /></td>
                                    <td>{book.title}</td>
                                    <td>${book.originalPrice}</td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;