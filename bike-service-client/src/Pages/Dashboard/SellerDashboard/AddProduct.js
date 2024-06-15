import React, { useContext } from "react";
import SellerLink from "../../Shared/SellerLink/SellerLink";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleProductAdd = (data) => {
    fetch(`http://localhost:5000/${data.categories}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard/myProduct");
      });
  };

  return (
    <div>
      <SellerLink></SellerLink>
      <div
        className="hero mt-20 min-h-screen mb-20"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="h-full flex justify-center items-center">
            <div className=" shadow-2xl shadow-blue-900">
              <h2 className="text-2xl text-white text-center">
                Add New Product
              </h2>
              <form onSubmit={handleProductAdd}>
                <div className="lg:grid lg:grid-cols-2 gap-4">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">bikeName</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">
                        currentPrice
                      </span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">price</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">
                        purchaseYear
                      </span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">condition</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">location</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">used</span>
                    </label>
                    <input
                      type="text"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">sellerName</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="text-white label-text">time</span>
                    </label>
                    <input
                      type="date"
                      className="text-white bg-gray-600 input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="form-control text-center w-full mt-4">
                  <label className="label">
                    {" "}
                    <span className="text-white label-text">categoryName?</span>
                  </label>
                  <select className="select select-primary text-white bg-gray-600">
                    <option defaultValue="Choose">Royal</option>
                    <option>Suzuki</option>
                    <option>Yamaha</option>
                  </select>
                </div>
                <input
                  className="btn btn-outline w-full mt-4 text-xl text-white"
                  value="Register"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
