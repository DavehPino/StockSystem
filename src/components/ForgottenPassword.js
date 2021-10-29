import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export const ForgottenPassword = (props) => {
  return (
    <Card className={classNames(props.className)}>
      <header className="flex flex-col gap-5 justify-center">
        <img
          alt="logo"
          src="https://i.ibb.co/RSnN3tK/lockdown2.png"
          className="h-16 w-11 self-center"
        />
        <h1 className="text-center mx-auto text-4xl sm:w-1/2 w-4/5 font-bold">
          ¿Tienes problemas para entrar?
        </h1>
        <p className="text-center mx-auto sm:w-1/2 w-4/5 font-semibold">
          Introduce tu correo electrónico y te enviaremos un enlace para que
          vuelvas a entrar a tu cuenta
        </p>
      </header>

      <form className="flex justify-center mt-8">
        <div className="flex flex-col justify-center w-2/5 md:w-1/3 gap-4">
          <Label>EMAIL</Label>
          <Input type="text"></Input>
          <button
            type="submit"
            className="bg-gray-200 text-red-500 rounded-lg font-semibold px-10 py-2 mx-auto"
          >
            Enviar enlace
          </button>
        </div>
      </form>
    </Card>
  );
};

const Card = styled.div`
  min-width: 10%;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const Input = styled.input`
  padding: 8px 5px;
  border-radius: 0.5rem;
  border: 1px solid black;
  background-color: #eee;
  outline: none;
`;

const Label = styled.label`
  font-weight: 500;
`;
