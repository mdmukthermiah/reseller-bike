import React from "react";
import { Link } from "react-router-dom";
import royal from "../../../assert/royal/royal2.jpg";
import suzuki from "../../../assert/su/su1..jpg";
import yamaha from "../../../assert/yama/yama1.jpg";

const Categories = () => {
  return (
    <div className="mt-12 mb-12">
      <div>
        <h2 className="text-3xl text-center text-orange-700">
          <i className="font-bold">All Category</i>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={royal}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title mt-5">Royal Enfield</h2>
            <p className="mt-12">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to='/royal'><button className="btn btn-primary">Shop Now!</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={yamaha}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Yamaha</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <Link to='/yamaha'><button className="btn btn-primary">Shop Now!</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={suzuki}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Suzuki</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
             <Link to='/suzuki'> <button className="btn btn-primary">Shop Now!</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
