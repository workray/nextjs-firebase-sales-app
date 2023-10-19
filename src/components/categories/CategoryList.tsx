import React from "react";
import useCategoryList from "./useCategoryList";
import { TCategory } from "@/types";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const { loading, categories } = useCategoryList();
  return (
    <>
      <h3 className="text-xl">
        Categories
        <span className="text-blue-300">({categories?.length})</span>
      </h3>
      {loading && <p>Loading...</p>}
      <ul>
        {categories?.map((item: TCategory) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
