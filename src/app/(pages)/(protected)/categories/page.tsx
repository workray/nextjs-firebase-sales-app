"use client";

import { AddCategory, CategoryList } from "@/components/categories";

export default function CategoriesPage() {
  return (
    <div className="max-w-lg w-full py-10 px-6">
      <AddCategory />
      <CategoryList />
    </div>
  );
}
