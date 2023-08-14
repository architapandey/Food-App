import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemList({ items }) {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  console.log({ items });
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b-2 p-4 ">
          <div className="flex flex-col justify-between font-bold mt-2">
            <div className="font-semibold">{item.card.info.name}</div>
            <div className="font-normal">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mt-2 text-xs flex flex-1">
              {item.card.info.description}
            </div>
            <div className="relative">
              {" "}
              <img
                src={CDN_URL + item.card.info.imageId}
                className="h-[100px] w-[100px] rounded-md"
              />
              <button
                className="bg-black text-white absolute bottom-2 right-2 left-2 transform translate-y-1/2 p-2 rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
