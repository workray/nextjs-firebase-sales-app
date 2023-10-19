import React from "react";
import useCategoryList from "./useProductList";
import { TProduct } from "@/types";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { loading, products } = useCategoryList();
  return (
    <div className="w-full overflow-auto">
      <table className="table w-full border-collapse table-auto bg-white">
        <thead>
          <tr className="text-bold text-base text-black">
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th className="w-24 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: TProduct, index: number) => (
            <ProductItem
              key={product.id}
              item={{ index: index + 1, ...product }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
