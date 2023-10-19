import { getProducts } from "@/lib/products";
import { useEffect, useState } from "react";

export default function useProductList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState([]);

  const updateProducts = (products: any) => {
    setLoading(false);
    setProducts(products);
  };
  useEffect(() => {
    return getProducts(updateProducts);
  }, []);

  return { loading, products };
}
