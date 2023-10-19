import { deleteCategory } from "@/lib/categories";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { CategoryItemProps } from "./types";
import useCategoryItem from "./useCategoryItem";
import Loading from "../Loading";

const CategoryItem = ({ item }: CategoryItemProps) => {
  const { deleting, handleDelete } = useCategoryItem({ item });
  return (
    <li className="w-full bg-white p-3 flex items-center justify-between rounded my-3">
      <p className="md:text-md text-sm">{item.name}</p>
      <div className="flex items-center space-x-5">
        <Loading loading={deleting} />
        {!deleting && (
          <MdDeleteForever
            className="text-3xl text-red-500 cursor-pointer"
            onClick={handleDelete}
          />
        )}
      </div>
    </li>
  );
};

export default CategoryItem;
