import React from "react";
import { getProduct } from "../helpers";
import ProductData from "./ProductData";
import { Product } from "../types";
import Container from "./Container";

const Products = async () => {
  const products = await getProduct();
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
      {products?.map((product: Product) => {
        return <ProductData key={product._id} product={product} />;
      })}
    </Container>
  );
};

export default Products;
