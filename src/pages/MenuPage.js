import React from "react";
import { NavBar } from "../components/NavBar";
import { Logo } from "../components/Logo";
import { LogoBig } from "../components/LogoBig";
import { PageProductsMenu } from "../components/Products/PageProductsMenu";
import styled from "styled-components";

export const MenuPage = () => {
  return (
    <>
      <NavBar className="flex flex-row-reverse items-center">
        <Logo className="mr-8" />
      </NavBar>
      <PageProductsMenu className="bg-black ml-8">
        <Container>
          <LogoBig className="w-1/3"></LogoBig>
        </Container>
      </PageProductsMenu>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -10rem;
`;
