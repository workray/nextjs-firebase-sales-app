import { addCategory } from "@/lib/categories";
import { FormEventHandler, useState } from "react";

const useAddCategory = () => {
  const [adding, setAdding] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setAdding(true);
    await addCategory(categoryName);
    setCategoryName("");
    setAdding(false);
  };

  return { adding, categoryName, setCategoryName, handleSubmit };
};
export default useAddCategory;
