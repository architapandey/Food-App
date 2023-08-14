import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function Menu() {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const hotelDetails = menuInfo?.cards?.[0]?.card?.card?.info;
  const menuDetails =
    menuInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3];

  console.log({ menuDetails });
  const categories =
    menuInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log({ categories });

  return !menuInfo ? (
    <Shimmer />
  ) : (
    <div className="menu ">
      <div className="menu-name m-auto">{hotelDetails?.name}</div>
      <div className="menu-details m-auto">
        {hotelDetails?.cuisines.join(", ")}- {hotelDetails?.costForTwoMessage}
      </div>

      <div className="menu-content">
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card.title}
            show={index === showIndex ? true : false}
            index={index}
            setShowIndex={setShowIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
