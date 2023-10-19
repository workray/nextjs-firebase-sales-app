import { useState } from "react";
import { ProductItemProps } from "./types";
import { deleteProduct } from "@/lib/products";

export default function useProductItem({ item }: ProductItemProps) {
  const [deleting, setDeleting] = useState<boolean>(false);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    setDeleting(true);
    await deleteProduct(item.id, item.name);
    setDeleting(false);
  };

  return { deleting, handleDelete };
}
