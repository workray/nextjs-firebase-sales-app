import { addProduct } from "@/lib/products";
import { FormEventHandler, useMemo, useState } from "react";
import { useCategoryList } from "../categories";
import { TCategory } from "@/types";

const useAddProduct = () => {
  const [adding, setAdding] = useState<boolean>(false);
  const [product, setProduct] = useState<string>("");
  const [price, setPrice] = useState<number>(100);
  const [category, setCategory] = useState<string>("select");
  const { categories } = useCategoryList();

  const categoryItems = useMemo(() => {
    return categories.map((category: TCategory) => ({
      id: category.id,
      name: category.name,
    }));
  }, [categories]);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setAdding(true);
    await addProduct(product, price, category);
    setCategory("select");
    setPrice(100);
    setProduct("");
    setAdding(false);
  };

  return {
    adding,
    product,
    price,
    category,
    setProduct,
    setPrice,
    setCategory,
    handleSubmit,
    categoryItems,
  };
};
export default useAddProduct;
