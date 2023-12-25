"use client";
import React from "react";
import { Product } from "../types";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductData = ({ product }: Props) => {
  console.log(product, "product");
  const { title, isNew, oldPrice, price, image } = product;
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <div className="w-full h-96 group overflow-hidden relative">
          <Image
            src={image}
            alt="product image"
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductData;
