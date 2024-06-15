import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import AllUsers from '../AllUsers/AllUsers';
import MyOrders from '../MyOrder/MyOrder';
import SellerDashboard from '../SellerDashboard/SellerDashboard';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    const { data: users = {} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (users[0]?.role === 'admin') {
        return <AllUsers></AllUsers>

    }
    else {
        if (users[0]?.role === 'Buyer') {
            return <>
                <MyOrders></MyOrders>
                
            </>
        }
        else {
            return <SellerDashboard></SellerDashboard>
        }
    }
};

export default Dashboard;