"use client";
import React from "react";
import { Product } from "../types";
import Image from "next/image";
import { calculatePercentage } from "../helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductData = ({ product }: Props) => {
  // console.log("product", product);
  const { title, isNew, oldPrice, price, image, rating, _id } = product;
  const starArray = Array.from({ length: rating }, (_, i) => (
    <span key={i} className="text-orange-600">
      {/* ★ */}
      <IoIosStar />
    </span>
  ));
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <Link href={{ pathname: "/product", query: { id: _id } }}>
          <div className="w-full h-96 group overflow-hidden relative">
            <Image
              src={image}
              alt="product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
            {isNew ? (
              <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
                New Arrival
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
        <div className="border-[1x] border-slate-300 border-t-0 bg-white px-2 py-4 flex flex-col gap-y-2 rounded-b-lg ">
          <p>{title}</p>
          {/* off percentage and price container */}
          <div className="flex items-center justify-between ">
            <div className="border-[1px] border-orange-600 px-4 py-1 rounded-full text-xs">
              {calculatePercentage(oldPrice, price)}% off
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through">
                <FormattedPrice amount={oldPrice} />{" "}
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={price} />{" "}
              </p>
            </div>
          </div>
          {/* Add to cart  and icon*/}
          <div className="flex items-center justify-between">
            <button className="bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200">
              Add to Cart
            </button>
            {/* star icons */}
            <div className="flex items-center gap-x-1">{starArray}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
