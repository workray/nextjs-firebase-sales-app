import { MdDeleteForever } from "react-icons/md";
import { ProductItemProps } from "./types";
import Loading from "../Loading";
import useProductItem from "./useProductItem";
import { TProduct } from "@/types";

const ProductItem = ({ item }: { item: TProduct & { index: number } }) => {
  const { deleting, handleDelete } = useProductItem({ item });
  return (
    <tr className="text-sm text-gray-500">
      <td className="flex items-end">{item.index}</td>
      <td>{item.name}</td>
      <td>{`$${item.price.toLocaleString()}`}</td>
      <td>{item.category}</td>
      <td className="flex items-center justify-center">
        <Loading loading={deleting} />
        {!deleting && (
          <MdDeleteForever
            className="text-3xl text-red-500 cursor-pointer"
            onClick={handleDelete}
          />
        )}
      </td>
    </tr>
  );
};

export default ProductItem;
