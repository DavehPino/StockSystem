import React from "react";
import styled from "styled-components";
import classNames from "classnames";
export const NavBarButton = (props) => {
  return (
    <Button className={classNames(props.className)} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
`;
