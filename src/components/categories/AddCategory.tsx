import React from "react";
import useAddCategory from "./useAddCategory";
import Input from "../Input";
import Button from "../Button";

const AddCategory = () => {
  const { adding, categoryName, setCategoryName, handleSubmit } =
    useAddCategory();
  return (
    <section className="w-full mb-10">
      <h3 className="text-lg mb-4">Add Category</h3>
      <form
        className="flex w-full items-center space-x-6"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Category"
          name="name"
          id="name"
          required
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          disabled={adding}
        />

        <Button type="submit" className="btn-primary">
          Add Category
        </Button>
      </form>
    </section>
  );
};

export default AddCategory;
