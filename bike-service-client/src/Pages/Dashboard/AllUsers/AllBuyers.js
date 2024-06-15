import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?role=Buyer`);
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/allUsers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                    }
                })
        }
    }
    

    return (
        <div className='border my-20'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>title</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((user, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{user?.title}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td><button
                                onClick={() => handleDelete(user?._id)}
                                className='btn btn-outline'>Delete</button></td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;

