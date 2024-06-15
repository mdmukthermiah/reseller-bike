import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import signup from "../../assert/login/download.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useToken from "../../Hooks/UseToken";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);

  if (token) {
    navigate("/");
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const role = form.role.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // console.log(role)
        toast("user created successfully");
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(name, email,role);
            console.log(role)
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('save user', data);
        setCreateUserEmail(email);
      });
  };
  return (
    <div className="hero w-full mb-10 mt-10">
      <div className="hero-content flex-col gap-20 lg:flex-row grid md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={signup} alt="" className="w-3/4" />
        </div>
        <div className="card my-20 py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">Sign UP!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs mt-4">
              <label className="label">
                {" "}
                <span className="text-white label-text">Buyer or Seller?</span>
              </label>
              <select
              name="role"
              className="select select-primary w-full max-w-xs text-black">
                <option defaultValue="Choose">Buyer</option>
                <option>Seller</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="text-center">
            ALready Have an account?{" "}
            <Link className="text-orange-600 font-bold " to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
