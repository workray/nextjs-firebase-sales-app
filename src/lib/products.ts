import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import db from "./firebase";
import message from "@/utils/message";

export const addProduct = async (
  name: string,
  price: number,
  category: string
) => {
  try {
    await addDoc(collection(db, "products"), {
      name,
      price,
      category,
    });
    message.success(`${name} product added! 🎉`);
  } catch (err) {
    message.error("Error! ❌");
    console.error(err);
  }
};

export const deleteProduct = async (id: string, name: string) => {
  try {
    //👇🏻 deletes the product
    await deleteDoc(doc(db, "products", id));
    message.success(`${name} deleted 🎉`);
  } catch (err) {
    message.error("Encountered an error ❌");
    console.log(err);
  }
  return null;
};

export const getProducts = (setProducts: any) =>
  onSnapshot(
    collection(db, "products"),
    (doc) => {
      const docs: any = [];
      doc.forEach((d: any) => {
        docs.push({ ...d.data(), id: d.id });
      });
      setProducts(docs);
    },
    (error) => {
      console.error(error);
      setProducts([]);
    }
  );
