import { useState } from "react";
import useProducts from "./useProducts";
import { useEffect } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedProduct = getStoredCart();
      const storeCart = [];
      for (const key in savedProduct) {
        const cartProduct = products.find((product) => product.key === key);

        if (cartProduct) {
          const quantity = savedProduct[key];
          cartProduct.quantity = quantity;
          storeCart.push(cartProduct);
        }
      }
      setCart(storeCart);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
