import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import db from "./firebase";
import message from "@/utils/message";

export const addCategory = async (name: string) => {
  try {
    await addDoc(collection(db, "categories"), {
      name,
    });
    message.success(`${name} category added! 🎉`);
  } catch (err) {
    message.error("Error! ❌");
    console.error(err);
  }
};

export const deleteCategory = async (id: string, name: string) => {
  try {
    //👇🏻 deletes the category
    await deleteDoc(doc(db, "categories", id));
    //👇🏻 deletes the products within the category
    const q = query(collection(db, "products"), where("category", "==", name));
    message.success(`${name} category deleted 🎉`);
    return onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((document) => {
        deleteDoc(doc(db, "products", document.id));
      });
    });
  } catch (err) {
    message.error("Encountered an error ❌");
    console.log(err);
  }
  return null;
};

export const getCategories = (setCategories: any) =>
  onSnapshot(
    collection(db, "categories"),
    (doc) => {
      const docs: any = [];
      doc.forEach((d: any) => {
        docs.push({ ...d.data(), id: d.id });
      });
      setCategories(docs);
    },
    (error) => {
      console.error(error);
      setCategories([]);
    }
  );
