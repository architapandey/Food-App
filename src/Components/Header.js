import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Header() {
  const cart = useSelector((store) => store.cart.items);

  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header bg-green-100  ">
      <div className="logo-container">
        <img src={LOGO_URL} className="image"></img>
      </div>
      <div className="nav-items ">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => navigate("/grocery")}>Grocery</li>

          <li onClick={() => navigate("/cart")} className="font-bold">
            Cart ({cart.length})
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
