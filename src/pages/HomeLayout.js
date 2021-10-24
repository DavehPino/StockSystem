import React, { useState } from "react";
import styled from "styled-components";
import { CardLogin } from "../components/CardLogin";
import { ForgottenPassword } from "../components/ForgottenPassword";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";

export const HomeLayout = () => {
  const [buttonMessage, setButtonMessage] = useState(
    "¿Has olvidado la contraseña?"
  );
  let isPasswordForgotten = buttonMessage === "Volver al inicio de sesión";
  const onClick = () => {
    if (isPasswordForgotten) {
      setButtonMessage("¿Has olvidado la contraseña?");
      isPasswordForgotten = false;
      console.log(isPasswordForgotten);
    } else {
      setButtonMessage("Volver al inicio de sesión");
      isPasswordForgotten = true;
      console.log(isPasswordForgotten);
    }
  };
  return (
    <Layout>
      <NavBar className="flex flex-row-reverse items-center">
        <Logo className="mr-8" />
      </NavBar>
      <PageBody className="flex flex-col items-center justify-center">
        {!isPasswordForgotten ? <CardLogin /> : <ForgottenPassword />}
        <button
          onClick={onClick}
          className="hover:text-blue-600 mx-auto mt-5 font-semibold"
        >
          {buttonMessage}
        </button>
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
