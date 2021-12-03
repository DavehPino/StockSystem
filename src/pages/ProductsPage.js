import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Logo } from "../components/Logo";
import styled from "styled-components";
import { SmallNavBar } from "../components/SmallNavBar";
import { NavBarButton } from "../components/Kit/NavBarButton";
import {
  getProducts,
  getProductData,
  deleteProduct,
} from "../services/ProductsService";
import { getUsers, getUserData, deleteUser } from "../services/UserServices";
import { TableList } from "../components/Table/TableList";
import { ProductsForm, UsersForm } from "../components/Kit/FormComponent";
import { BasicButton } from "../components/Kit/BasicButton";


export const ProductsPage = () => {
  const initialProductsValues = {
    id: 0,
    name: "",
    description: "",
    provider: "",
    brand: "",
    price: 0,
    color: "",
    edit: false,
  };
  const initialUsersValues = {
    id: 0,
    name: "",
    lastName: "",
    userType: "",
    store: "",
    date: "",
    edit: false,
  };
  const [productsValues, setProductsValues] = useState(initialProductsValues);
  const [usersValues, setUsersValues] = useState(initialUsersValues);
  const [menu, setMenu] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const productsList = async () => {
    try {
      const res = await getProducts();
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };
  const usersList = async () => {
    try {
      const res = await getUsers();
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      console.log(err);
    }
  };
  var elementId;
  const getId = (id) => {
    elementId = id;
  };

  const handleAddProduct = () => {
    if (showForm) {
      setProductsValues(initialProductsValues);
    } else {
      setShowForm(true);
    }
  };

  const handleEditProduct = async (elementId) => {
    if (showForm) {
      if (elementId !== null || elementId !== undefined) {
        const res = await getProductData(elementId);
        let data = await res.json();
        const product = data.products;
        product["edit"] = true;
        setProductsValues(product);
      }
    } else {
      if (elementId !== null || elementId !== undefined) {
        const res = await getProductData(elementId);
        let data = await res.json();
        const product = data.products;
        product["edit"] = true;
        setProductsValues(product);
        setShowForm(true);
      } else {
        setShowForm(true);
      }
    }
  };

  const handleDeleteProduct = async (elementId) => {
    if (elementId !== null || elementId !== undefined) {
      await deleteProduct(elementId);
      await productsList();
    }
  };
  const handleAddUser = () => {
    if (showForm) {
      setUsersValues(initialUsersValues);
    } else {
      setShowForm(true);
    }
  };

  const handleEditUser = async (elementId) => {
    if (showForm) {
      if (elementId !== null || elementId !== undefined) {
        const res = await getUserData(elementId);
        let data = await res.json();
        const user = data.users;
        user["edit"] = true;
        setUsersValues(user);
      }
    } else {
      if (elementId !== null || elementId !== undefined) {
        const res = await getUserData(elementId);
        let data = await res.json();
        const user = data.users;
        user["edit"] = true;
        setUsersValues(user);
        setShowForm(true);
      } else {
        setShowForm(true);
      }
    }
  };

  const handleDeleteUser = async (elementId) => {
    if (elementId !== null || elementId !== undefined) {
      console.log(elementId);
      await deleteUser(elementId);
      await usersList();
    }
  };

  const userColNames = [
    "ID",
    "Nombre",
    "Apellido",
    "Usuario",
    "Sucursal",
    "Fecha Alta",
  ];
  const productsColNames = [
    "ID",
    "Nombre",
    "Descripcion",
    "Proveedor",
    "Marca",
    "Color",
    "Precio",
  ];

  return (
    <>
      <NavBar className="flex flex-row-reverse items-center">
        <Logo className="mr-8" />
      </NavBar>
      <Dashboard>
        <ButtonContainer>
          <SmallNavBar>
            <NavBarButton
              onClick={async () => {
                await usersList();
                setMenu(1);
              }}
              className="focus:bg-gray-200 bg-gray-500 hover:bg-gray-300 text-black font-bold"
            >
              USUARIOS
            </NavBarButton>
            <NavBarButton
              onClick={async () => {
                await productsList();
                setMenu(2);
              }}
              className="focus:bg-gray-200 bg-gray-500 hover:bg-gray-300 text-black font-bold"
            >
              PRODUCTOS
            </NavBarButton>
          </SmallNavBar>
          {
            menu === 1 ? (
              <Container>
                <ButtonsandForm className="mx-auto mt-14 w-1/2 sm:w-1/4">
                  <Buttons>
                    <BasicButton onClick={handleAddUser}>AGREGAR</BasicButton>
                    <BasicButton
                      onClick={() => {
                        handleEditUser(elementId);
                      }}
                    >
                      MODIFICAR
                    </BasicButton>
                    <BasicButton
                      onClick={() => {
                        handleDeleteUser(elementId);
                      }}
                    >
                      ELIMINAR
                    </BasicButton>
                  </Buttons>
                </ButtonsandForm>
                <UsersForm
                  initialState={usersValues}
                  displayForm={showForm}
                  usersList={usersList}
                />
              </Container>
            ) : menu === 2? ( // <MenuUsers className="mx-auto mt-14 flex flex-row" />
              <Container>
                <ButtonsandForm className="mx-auto mt-14 w-1/2 sm:w-1/4">
                  <Buttons>
                    <BasicButton onClick={handleAddProduct}>
                      AGREGAR
                    </BasicButton>
                    <BasicButton
                      onClick={() => {
                        handleEditProduct(elementId);
                      }}
                    >
                      MODIFICAR
                    </BasicButton>
                    <BasicButton
                      onClick={() => {
                        handleDeleteProduct(elementId);
                      }}
                    >
                      ELIMINAR
                    </BasicButton>
                  </Buttons>
                </ButtonsandForm>
                <ProductsForm
                  initialState={productsValues}
                  displayForm={showForm}
                  productsList={productsList}
                />
              </Container>
            ) : null // <MenuInventory className="mx-auto mt-14" />
          }
        </ButtonContainer>
        <DataContainer>
          {menu === 1 ? (
            <TableList
              list={users}
              getId={getId}
              colNames={userColNames}
            ></TableList>
          ) : menu === 2 ? (
            <TableList
              list={products}
              getId={getId}
              colNames={productsColNames}
            ></TableList>
          ) : null}
        </DataContainer>
      </Dashboard>
    </>
  );
};

const ButtonsandForm = styled.div`
  border-radius: 2rem;
  min-height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  button + button {
    margin-top: 2rem;
  }
  align-items: center;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Dashboard = styled.div`
  height: 88%;
  display: flex;
`;

const ButtonContainer = styled.div`
  background-color: rgb(160, 160, 160);
  height: 100%;
  width: 45%;
  margin-bottom: 5px;
`;

const DataContainer = styled.div`
  background-color: rgb(236, 236, 236);
  height: 100%;
  width: 55%;
`;
