import React, { useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useHistory } from "react-router";

export const CardLogin = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  const history = useHistory();
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handlePwdChange = (event) => {
    setPwdValue(event.target.value);
  };
  const onSubmit = () => {
    if (emailValue == "Joan" && pwdValue == "123456") {
      history.push("/menu");
    }
  };
  return (
    <Card className={classNames(props.className)}>
      <header className="flex flex-col gap-5 justify-center">
        <h1 className="mx-auto text-4xl font-bold">Iniciar Sesión</h1>
        <p className="mx-auto font-semibold">Ingrese para continuar</p>
      </header>

      <form className="flex justify-center  mt-5">
        <div className="flex flex-col w-4/5 md:w-1/2 gap-4">
          <Label>USUARIO</Label>
          <Input
            value={emailValue}
            onChange={handleEmailChange}
            type="text"
          ></Input>
          <Label>CONTRASEÑA</Label>
          <Input
            value={pwdValue}
            onChange={handlePwdChange}
            type="password"
          ></Input>
          <button
            disabled={!pwdValue || !emailValue}
            type="submit"
            onClick={onSubmit}
            className="bg-gray-200 text-red-500 font-semibold px-10 py-2 mx-auto"
          >
            Log In
          </button>
        </div>
      </form>
    </Card>
  );
};

const Card = styled.div`
  min-width: 35%;
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
