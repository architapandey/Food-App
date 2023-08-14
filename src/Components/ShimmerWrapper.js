import React from "react";
import Shimmer from "./Shimmer";

const ShimmerWrapper = (props) => {
  const { children, isLoading } = props;

  if (isLoading) return <div className="shimmer-card"></div>;

  return <div>{children}</div>;
};

export default ShimmerWrapper;
