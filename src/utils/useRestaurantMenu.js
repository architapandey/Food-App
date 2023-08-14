import { useState, useEffect } from "react";
import { Menu_URL } from "./constant";

function useRestaurantMenu(resId) {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    setresInfo(json.data);
  };

  return resInfo;
}

export default useRestaurantMenu;
