import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mb-[500px]">
      <h3 className="text-3xl ml-10 mb-10 text-center">My Orders</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <img className="w-20" src={booking.img} alt="" />
                </td>
                <td>{booking.title}</td>
                <td>${booking.originalPrice}</td>
                <td>
                  {booking.originalPrice && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn">PAY NOW</button>
                    </Link>
                  )}
                  {booking?.originalPrice && booking.paid && (
                    <span className="text-2xl text-orange-700 font-bold">
                      Paid
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
