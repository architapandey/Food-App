import React from "react";
import { CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { resData } = props;
  const { id, name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    resData?.info;

  //   const totalAmount = feeDetails ? feeDetails.totalFee : 0;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/restaurant/" + id);
      }}
      className="m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-xl"
    >
      <div className="image-conatiner">
        <img alt="image" src={CDN_URL + cloudinaryImageId} className="img" />
      </div>
      <div className="content ">
        <div className="font-bold mt-4 mx-2 ">{name}</div>
        <div className="mx-2">{cuisines?.join(", ")}</div>
        <div className="mx-2">{costForTwo}</div>
        {/* <div className="total-amount">Total Amount: {totalAmount} INR</div> */}
        <div className="mx-2">Rating:{avgRating}</div>
      </div>
    </div>
  );
}

export const withPromotedlabel = (Card) => {
  return (props) => {
    <div>
      <label className="absolute bg-black text-white p-2 rounded-lg m-2">
        Promoted
      </label>
      <Card {...props} />
    </div>;
  };
};

export default Card;
