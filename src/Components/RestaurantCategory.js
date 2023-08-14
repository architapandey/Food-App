import React from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, show, index, setShowIndex }) {
  const handleClick = () => {
    show ? setShowIndex(null) : setShowIndex(index);
  };
  return (
    <div className="bg-gray-50 w-8/12 p-4 m-auto shadow-lg  ">
      <div className="font-bold cursor-pointer" onClick={handleClick}>
        {data.title} ({data.itemCards.length})
      </div>
      {/* //body */}
      <div>{show && <ItemList items={data.itemCards} />}</div>
    </div>
  );
}

export default RestaurantCategory;
