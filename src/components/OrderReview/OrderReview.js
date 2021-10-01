import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Carts from "../Cart/Carts";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handlePlaceOrder = () => {
    history.push("./inventory");
    setProducts([]);
    clearTheCart();
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {cart.map((product) => (
              <ReviewItem
                key={product.key}
                product={product}
                handleRemove={handleRemove}
              ></ReviewItem>
            ))}
          </div>
          <div className="col-md-3 mt-4">
            <Carts cart={cart}>
              <div className="mx-2 mt-2">
                <Link to="/inventory">
                  <button
                    onClick={handlePlaceOrder}
                    className="btn btn-warning mx-5 "
                  >
                    Place Order
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

export default OrderReview;
