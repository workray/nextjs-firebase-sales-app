import React, { FormEventHandler, useState } from "react";
import { CategoryItemProps } from "./types";
import { deleteCategory } from "@/lib/categories";

export default function useCategoryItem({ item }: CategoryItemProps) {
  const [deleting, setDeleting] = useState<boolean>(false);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    setDeleting(true);
    await deleteCategory(item.id, item.name);
    setDeleting(false);
  };

  return { deleting, handleDelete };
}
