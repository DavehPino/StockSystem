import React from "react";
import classNames from "classnames";

export const LogoBig = (props) => {
  return (
    <img
      alt="logo"
      className={classNames(props.className)}
      src="https://i.ibb.co/p3kQVYp/stock-system-big.png"
    />
  );
};
