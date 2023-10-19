import React from "react";
import useAddProduct from "./useAddProduct";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import useCategoryList from "./useProductList";

const AddProduct = () => {
  const {
    adding,
    product,
    price,
    category,
    setProduct,
    setPrice,
    setCategory,
    handleSubmit,
    categoryItems,
  } = useAddProduct();

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setPrice(value);
  };
  return (
    <section className="w-full mb-10">
      <h3 className="text-lg mb-4">
        Add Product
        <span className="text-gray-500 text-sm">(name, price, category)</span>
      </h3>
      <form
        className="flex w-full items-center space-x-6"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Product"
          name="name"
          id="name"
          required
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          disabled={adding}
        />
        <Input
          type="number"
          placeholder="Price"
          name="price"
          id="price"
          required
          value={price.toString()}
          onChange={handlePrice}
          disabled={adding}
        />
        <Select
          emptyValue="select"
          emptyName="Select Category"
          items={categoryItems}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={adding}
        />

        <Button type="submit" className="btn-primary">
          Add Product
        </Button>
      </form>
    </section>
  );
};

export default AddProduct;
