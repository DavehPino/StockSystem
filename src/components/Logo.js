import React from "react";
import classNames from "classnames";

export const Logo = (props) => {
  return (
    <img
      className={classNames("h-4/5", props.className)}
      src="https://i.ibb.co/pf5Xsdn/stock-system.png"
    />
  );
};
