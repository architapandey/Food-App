import React, { useState, useEffect } from "react";
import Card, { withPromotedlabel } from "./Card";
import Shimmer from "./Shimmer";

function Body() {
  const [resList, setResList] = useState([]);
  const [input, setInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterHandler = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4.6);
    setFilteredList(filteredList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const RestCard = withPromotedlabel(Card);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantData = json.data.cards.filter(
      (res) => res.card.card.id === "restaurant_grid_listing"
    )[0];
    const restaurantList =
      restaurantData.card.card.gridElements.infoWithStyle.restaurants;
    setResList(restaurantList);
    setFilteredList(restaurantList);
    setLoading(false);
  };

  const searchHandler = () => {
    setLoading(true);
    const filteredRest = resList.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredList(filteredRest);
    setLoading(false);
  };

  if (loading) return <Shimmer />;
  return (
    <div>
      <div className="m-4 p-4">
        <input
          placeholder="Search"
          className="border border-solid border-black p-1 rounded-md "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={searchHandler}
          className=" border bg-green-100 rounded-md px-4 py-1 m-4"
        >
          Search
        </button>
        <button
          onClick={filterHandler}
          className=" border bg-gray-100 rounded-md px-4 py-1 m-4"
        >
          {" "}
          Top Rated Restaurents
        </button>
      </div>
      <div className="restaurant-container">
        {filteredList.map((restaurant) =>
          restaurant.info.promoted ? (
            <RestCard resData={restaurant} />
          ) : (
            <Card key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
}

export default Body;
