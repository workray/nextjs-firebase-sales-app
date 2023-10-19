"use client";

import { AddProduct, ProductList } from "@/components/products";

export default function ProductsPage() {
  return (
    <div className="max-w-4xl w-full py-10 px-6">
      <AddProduct />
      <ProductList />
    </div>
  );
}
