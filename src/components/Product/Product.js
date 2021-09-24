import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  const { name, img, price, stock, seller, star } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="Shop mt-4">
      <div className="card mb-3" style={{ maxWidth: "740px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title text-primary mb-3">{name}</h4>
              <div className="col-md-8">
                <p className="card-text">by: {seller}</p>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text">
                  <small>left only {stock} </small>
                </p>
              </div>
              <div className="col-md-4">
                <Rating
                  className="text-warning"
                  initialRating={star}
                  readonly
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                ></Rating>
                <small className="text-danger fw-bold"> Rating: {star}</small>
              </div>
              <button
                onClick={() => props.handleAddToCart(props.product)}
                className="btn btn-warning mt-3"
              >
                {element} Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
