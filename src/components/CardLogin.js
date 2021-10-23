import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export const CardLogin = (props) => {
  return (
    <Card className={classNames(props.className)}>
      <header className="flex flex-col gap-5 justify-center">
        <h1 className="mx-auto text-4xl font-bold">Iniciar Sesión</h1>
        <p className="mx-auto font-semibold">Ingrese para continuar</p>
      </header>

      <form className="flex justify-center  mt-5">
        <div className="flex flex-col w-1/2 gap-4">
          <Label>EMAIL</Label>
          <Input type="text"></Input>
          <Label>CONTRASEÑA</Label>
          <Input type="password"></Input>
          <button className="bg-gray-200 text-red-500 font-semibold px-10 py-2 mx-auto">
            Log In
          </button>
        </div>
      </form>
      <p className="mx-auto mt-5 font-semibold">¿Has olvidado la contraseña?</p>
    </Card>
  );
};

const Card = styled.div`
  height: 70%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const Input = styled.input`
  padding: 8px 5px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: #eee;
  outline: none;
`;

const Label = styled.label`
  font-weight: 500;
`;
