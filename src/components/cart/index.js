import React, { useState } from "react";
import "./index.css";

function Cart({ open, setOpen, cartProducts, setCartProducts }) {
  function calculateTotal() {
    let sum = 0;
    for (let i = 0; i < cartProducts?.length; i++) {
      console.log(Number(cartProducts[i]?.price?.amount));
      sum = sum + Number(cartProducts[i]?.price?.amount);
    }
    console.log(sum);
    return sum;
  }
  return (
    <div>
      <div className="cart-header">
        <h2>Cart</h2>
        <button onClick={() => setOpen(false)} className="close-button">
          X
        </button>
      </div>
      <div className="cart-parent-container">
        {cartProducts?.map((item, index) => (
          <div className="cart-container">
            <div>
              <img
                src={item?.images?.edges[0]?.node?.src}
                alt="product image"
                height={125}
                width={125}
              ></img>
            </div>
            <div className="cart-sub-container">
              <b>{item?.title}</b>
              <span>{item?.handle}</span>
              <div className="price-quantity-container">
                <span>
                  <button className="quantity-button">
                    <b>-</b>
                  </button>
                  {item?.quantity}
                  <button className="quantity-button">
                    <b>+</b>
                  </button>
                </span>
                <p>
                  ₹ {item?.price?.amount}
                  {" per Item"}
                </p>
              </div>
              {/* <p className="total-price">
                ₹{item?.price?.amount * item?.quantity}
              </p> */}
            </div>
          </div>
        ))}
      </div>
      <hr />
      <span className="sub-total">
        <p> SubTotal</p> <b>₹ {calculateTotal()}</b>
      </span>
      <button className="checkout-button">Check Out</button>
    </div>
  );
}

export default Cart;
