import React from "react";
import styled from "styled-components";
import { CardLogin } from "../components/CardLogin";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";

export const HomeLayout = () => {
  return (
    <Layout>
      <NavBar className="flex flex-row-reverse items-center">
        <Logo className="mr-6" />
      </NavBar>
      <PageBody className="flex items-center justify-center">
        <CardLogin></CardLogin>
      </PageBody>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const PageBody = styled.div`
  width: 100%;
  height: 88vh;
`;
