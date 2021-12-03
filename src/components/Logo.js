import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router";

export const Logo = (props) => {
  const history = useHistory()
  return (
    <img
      onClick={() => history.push('/')}
      alt="logo"
      className={classNames("h-4/5 cursor-pointer", props.className)}
      src="https://i.ibb.co/pf5Xsdn/stock-system.png"
    />
  );
};
