import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export const SmallNavBar = (props) => {
  return (
    <StyledNavBar className={classNames(props.className)}>
      {props.children}
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  display: flex;
  height: 5vh;
  border-bottom: solid grey 1px;

  button + button {
    border-left: solid grey 1px;
  }
`;
