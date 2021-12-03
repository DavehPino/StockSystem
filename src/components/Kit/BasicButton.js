import React from "react";
import styled from "styled-components";

export const BasicButton = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

const Button = styled.button`
  border-radius: 3rem;
  background-color: rgb(202, 202, 202);
  padding: 0.5rem 3rem;

  &:hover {
    background-color: rgb(236, 236, 236);
  }
`;
