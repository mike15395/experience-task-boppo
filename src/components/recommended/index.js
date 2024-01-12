import React, { useEffect, useState } from "react";
import Product from "../product";
import "./index.css";

function Recommended({ product, cartProducts, open, setOpen }) {
  const [recommended, setRecommended] = useState([]);

  //function to check recommended products
  function recommendedProducts() {
    console.log(cartProducts, "cart products");
    if (cartProducts?.length > 0) {
      for (const cartItem of cartProducts) {
        // Find matching products based on tags
        const matchingProducts = product?.filter((product) =>
          product?.tags?.some((tag) => cartItem?.tags?.includes(tag))
        );
        console.log(matchingProducts, "matching products");
        if (matchingProducts?.length > 0) {
          setRecommended(matchingProducts);
        }
      }
    }
  }

  useEffect(() => {
    recommendedProducts();
  }, [cartProducts]);

  return (
    <div>
      <h1 className="recommend-heading">Recommended Products </h1>
      <div className="matching-container">
        {recommended?.map((item, index) => (
          <Product item={item} index={index} open={open} setOpen={setOpen} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
