import { getCategories } from "@/lib/categories";
import { TCategory } from "@/types";
import { useEffect, useState } from "react";

export default function useCategoryList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<TCategory[]>([]);

  const updateCategories = (categories: any) => {
    setLoading(false);
    setCategories(categories);
  };
  useEffect(() => {
    return getCategories(updateCategories);
  }, []);

  return { loading, categories };
}
