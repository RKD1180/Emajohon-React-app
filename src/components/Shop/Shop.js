import React, { useEffect } from "react";
import { useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Carts from "../Cart/Carts";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [displayproducts, setDisplayproducts] = useState([]);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayproducts(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    const exists = Cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = Cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...Cart, product];
    }

    setCart(newCart);

    // save to local storage

    console.log(product.key);
    addToDb(product.key);
  };

  useEffect(() => {
    if (Products.length) {
      const savedProduct = getStoredCart();
      const storeCart = [];
      for (const key in savedProduct) {
        const cartProduct = Products.find((product) => product.key === key);

        if (cartProduct) {
          const quantity = savedProduct[key];
          cartProduct.quantity = quantity;
          storeCart.push(cartProduct);
        }
      }
      setCart(storeCart);
    }
  }, [Products]);

  const handleSearch = (fetch) => {
    const getInput = fetch.target.value;
    const filterSearch = Products.filter((product) =>
      product.name.toLowerCase().includes(getInput.toLowerCase())
    );
    setDisplayproducts(filterSearch);
  };

  return (
    <div className="show_products">
      <div className="search bg-dark p-2  ">
        <form className="d-flex w-50 mx-auto">
          <input
            onChange={handleSearch}
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {displayproducts.map((product) => (
              <Product
                product={product}
                key={product.key}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>
          <div className="col-md-3 mt-4">
            <Carts cart={Cart}>
              <div className="mx-2 mt-2">
                <Link to="/order_review">
                  <button className="btn btn-warning mx-5 ">
                    Review Order
                  </button>
                </Link>
              </div>
            </Carts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
