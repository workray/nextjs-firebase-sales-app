export * from "./auth";

export type TCategory = {
  name: string;
  id: string;
  number_of_products: number;
};

export type TProduct = {
  id: string;
  category: string;
  price: number;
  quantity: number;
  name: string;
};
