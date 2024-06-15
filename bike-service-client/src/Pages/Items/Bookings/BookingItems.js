import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingItems = ({ nameOfBike }) => {
  const { user } = useContext(AuthContext);
  const { img, title, originalPrice } = nameOfBike;
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const phone = form.phone.value;
    // const location = form.location.value;

    const booking = {
      name,
      email,
      img,
      originalPrice,
      title,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          toast.success("BOOKING CONFIRMED");
          // refetch();
          navigate("/Dashboard");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-center uppercase text-2xl my-4">Add your info</h1>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered w-full"
              disabled
            />

            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered w-full"
              disabled
            />

            <input
              name="title"
              type="text"
              defaultValue={title}
              placeholder="Car Name"
              className="input input-bordered w-full "
              disabled
            />

            <input
              name="originalPrice"
              type="price"
              defaultValue={originalPrice}
              placeholder="price"
              className="input input-bordered w-full "
              disabled
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />

            <input
              name="address"
              type="text"
              placeholder="Meeting Address"
              className="input input-bordered w-full"
              required
            />

            <input
              className="btn btn-outline hover:bg-[#ff4605] w-full"
              type="submit"
              value="ADD"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingItems;
