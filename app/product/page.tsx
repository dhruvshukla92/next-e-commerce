import React from "react";
import { getProductById, getTrendingProducts } from "../helpers";
import Container from "../components/Container";
import ProductData from "../components/ProductData";
import { Product } from "../types";
import ProductDescription from "../components/ProductDescription";

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const ProductPage = async ({ searchParams }: Props) => {
  console.log("searchParams", searchParams);
  const { id } = searchParams;
  const product = await getProductById(Number(id));
  const trendingData = await getTrendingProducts();
  // console.log("trendingData", trendingData);
  //   console.log("data", data);

  return (
    <div>
      <Container>
        <div>
          <ProductDescription product={product} />
        </div>
        <div>
          <p className="text-xl font-semibold py-8">Trending Products</p>
          <div className="flex gap-2 w-full overflow-x-scroll">
            {trendingData?.map((product: Product) => (
              <ProductData key={product._id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
