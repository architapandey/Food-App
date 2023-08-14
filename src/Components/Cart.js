import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="">
      <div className="font-bold text-2xl flex justify-center items-center mt-8 mb-4  ">
        Cart
      </div>

      <div className="w-5/12 m-auto border border-black  ">
        <ItemList items={cartItem} />
        <button
          className="border border-black text-lg p-2 rounded-sm  flex m-4 ml-auto"
          onClick={handleClear}
        >
          Clear
        </button>
        {cartItem.length == 0 && <h1>No Items In Cart!</h1>}
      </div>
    </div>
  );
}

export default Cart;
