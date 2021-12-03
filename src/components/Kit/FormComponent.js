import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addProduct, updateProduct } from "../../services/ProductsService";
import { addUser, updateUser } from "../../services/UserServices";

export const ProductsForm = ({ displayForm, productsList, initialState }) => {
  const defaultState = {
    id: 0,
    name: "",
    description: "",
    provider: "",
    brand: "",
    price: 0,
    color: "",
    edit: false,
  };
  const [product, setProduct] = useState(initialState);
  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setProduct(initialState);
  }, [initialState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product.edit) {
      try {
        const res = await updateProduct(product.id, product);
        const data = await res.json();
        if (data.message === "Success") {
          await productsList();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await addProduct(product);
        const data = await res.json();
        if (data.message === "Success") {
          setProduct(defaultState);
          await productsList();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      {displayForm && (
        <Container>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 w-11/12 gap-y-4 gap-x-3 items-center">
              <Label>Nombre</Label>
              <Input
                name="name"
                type="text"
                onChange={handleInputChange}
                value={product.name}
                maxLength="50"
              ></Input>
              <Label>Proveedor</Label>
              <Input
                name="provider"
                type="text"
                onChange={handleInputChange}
                value={product.provider}
                maxLength="50"
              ></Input>
              <Label>Descripcion</Label>
              <Input
                name="description"
                type="text"
                onChange={handleInputChange}
                value={product.description}
                maxLength="50"
              ></Input>
              <Label>Marca</Label>
              <Input
                name="brand"
                type="text"
                onChange={handleInputChange}
                value={product.brand}
                maxLength="50"
              ></Input>
              <Label>Color</Label>
              <Input
                name="color"
                type="text"
                onChange={handleInputChange}
                value={product.color}
                maxLength="50"
              ></Input>
              <Label>Precio</Label>
              <Input
                name="price"
                type="number"
                onChange={handleInputChange}
                value={product.price}
              ></Input>
            </div>
            <button
              type="submit"
              className="mt-4 rounded-full bg-gray-200 font-semibold px-10 py-2 mx-auto"
            >
              Enviar
            </button>
          </form>
        </Container>
      )}
    </>
  );
};

export const UsersForm = ({ displayForm, usersList, initialState }) => {
  const defaultState = {
    id: 0,
    name: "",
    lastName: "",
    userType: "",
    store: "",
    date: "",
    edit: false,
  };
  const [user, setUser] = useState(initialState);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setUser(initialState);
  }, [initialState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.edit) {
      try {
        const res = await updateUser(user.id, user);
        const data = await res.json();
        if (data.message === "Success") {
          await usersList();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        console.log("Pasó")
        console.log(user)
        const res = await addUser(user);
        const data = await res.json();
        if (data.message === "Success") {
          setUser(defaultState);
          await usersList();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      {displayForm && (
        <Container>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 w-11/12 gap-y-4 gap-x-3 items-center">
              <Label>Nombre</Label>
              <Input
                name="name"
                type="text"
                onChange={handleInputChange}
                value={user.name}
                maxLength="20"
              ></Input>
              <Label>Apellido</Label>
              <Input
                name="lastName"
                type="text"
                onChange={handleInputChange}
                value={user.lastName}
                maxLength="20"
              ></Input>
              <Label>Usuario</Label>
              <Input
                name="userType"
                type="text"
                onChange={handleInputChange}
                value={user.userType}
                maxLength="10"
              ></Input>

              <Label>Sucursal</Label>
              <Input
                name="store"
                type="text"
                onChange={handleInputChange}
                value={user.store}
                maxLength="10"
              ></Input>
              <Label>Fecha Alta</Label>
              <Input
                name="date"
                type="text"
                onChange={handleInputChange}
                value={user.date}
                maxLength="10"
              ></Input>
            </div>
            <button
              type="submit"
              className="mt-4 rounded-full bg-gray-200 font-semibold px-10 py-2 mx-auto"
            >
              Enviar
            </button>
          </form>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 99%;
  background: linear-gradient(
    90deg,
    rgba(93, 93, 93, 1) 0%,
    rgba(107, 107, 107, 1) 58%,
    rgba(142, 142, 142, 1) 100%
  );
  padding: 15px 10px;
  height: 60%;
  border: 1px solid grey;
  border-radius: 10px;
  align-items: center;
  display: flex;
`;

const Input = styled.input`
  padding: 4px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid black;
  background-color: #eee;
  outline: none;
`;

const Label = styled.label`
  font-weight: 500;
`;
