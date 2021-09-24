import React from "react";

const Carts = (props) => {
  const { cart } = props;
  let total = 0;
  let totalQuantity = 0;

  for (const pd of cart) {
    if (!pd.quantity) {
      pd.quantity = 1;
    }
    total = total + pd.price * pd.quantity;
    totalQuantity = totalQuantity + pd.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = tax + shipping + total;
  return (
    <div>
      <div className="card" style={{ width: "20rem" }}>
        <ul className="list-group list-group-flush">
          <h2 className="fw-bold p-2 text-center">Order Summary</h2>
          <p className="fw-bold p-2 text-center">
            Item In Cart {totalQuantity}
          </p>
          <li className="list-group-item">Total Price: {total.toFixed(2)}</li>
          <li className="list-group-item">Shipping: {shipping}</li>
          <li className="list-group-item">Tax: {tax.toFixed(2)}</li>
          <li className="list-group-item">
            Grand Total: {grandTotal.toFixed(2)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carts;
