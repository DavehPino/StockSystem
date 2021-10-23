import React, { Children } from "react";
import styled from "styled-components";
import classNames from "classnames";

export const NavBar = (props) => {
  return (
    <StyledNavBar className={classNames(props.className)}>
      {props.children}
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  background-color: black;
  width: 100%;
  height: 80px;
  border-bottom: solid white 2px;
`;
