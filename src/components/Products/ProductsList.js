import React, { useEffect } from "react";
import { getProducts } from "../../services/ProductsService";

export const ProductsList = () => {
  //   const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts();
  }, []);

  const listProducts = async () => {
    try {
      const response = await getProducts();
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return <div></div>;
};
