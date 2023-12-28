import React from "react";
import { Product } from "../types";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  const {
    title,
    isNew,
    oldPrice,
    price,
    description,
    category,
    image,
    rating,
    _id,
  } = product;

  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div>
        <Image
          src={image}
          alt="product_image"
          height={500}
          width={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-10 px-4">
        <div>
          <p className="text-3xl font-semibold">{title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={price} />
          </p>
          <p className="text-lightText">{description}</p>
          <div className="text-lightText text-sm py-4">
            <p>
              SKU: <span className="text-darkText">{_id}</span>
            </p>
            <p>
              Catergory: <span className="text-darkText">{category}</span>{" "}
            </p>
          </div>
          <div className="flex items-center cursor-pointer group">
            <button className="bg-darkText text-slate-100 px-2 py-3 text-sm uppercase flex items-center gap-2 border-r-[1px] border-r-slate-500">
              Add to cart
            </button>
            <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
              <IoMdCart />
            </span>
          </div>
          <p className="flex gap-1 py-8 text-slate-500">
            <MdFavoriteBorder className="text-2xl" />
            Add to wishlist
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
