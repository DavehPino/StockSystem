import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { BasicButton } from "../Kit/BasicButton";
import { useHistory } from "react-router";

export const PageProductsMenu = (props) => {
  const history = useHistory()
  const onClick = () => {
    history.push("/menu",)
  };
  return (
    <>
      <Container className={classNames("w-1/2 sm:w-1/4", props.className)}>
        <ButtonContainer>
          <BasicButton onClick={onClick}>USUARIOS</BasicButton>
          <BasicButton onClick={onClick}>PRODUCTOS</BasicButton>
          <BasicButton onClick={onClick}>INVENTARIO</BasicButton>
        </ButtonContainer>
      </Container>
      {props.children}
    </>
  );
};

const Container = styled.div`
  border-radius: 2rem;
  min-height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  button + button {
    margin-top: 3rem;
  }
  align-items: center;
  z-index: 2;
`;
