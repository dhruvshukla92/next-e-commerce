import React from "react";
import AddToCart from "./AddToCart";
import VercelImg from "../../public/vercel.svg";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div
      className="card card-compact glass bg-base-100 w-96 border-1 border-gray-200 rounded-lg shadow-md hover:shadow-xl "
      // className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600"
    >
      <figure>
        <Image src={VercelImg} alt="vercel" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Product Name</h1>
        <div className="card-action flex justify-end">
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
