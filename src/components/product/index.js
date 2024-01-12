import React from "react";
import "./index.css";

function Product({ item, open, setOpen, cartProducts, setCartProducts }) {
  return (
    <div>
      <div className="product-container">
        <img
          src={item?.images?.edges[0]?.node?.src}
          alt="product image"
          height={175}
          width={175}
        ></img>
        <b className="product-title">{item?.title}</b>

        <p>₹ {item?.price?.amount}</p>
        <button
          className="cart-button"
          onClick={() => {
            setOpen(true);

            setCartProducts([...cartProducts, item]);
          }}
          disabled={cartProducts?.length >= 10 ? true : false}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
