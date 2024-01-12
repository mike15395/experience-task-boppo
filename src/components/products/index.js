import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../API/productsAPI";
import Product from "../product";
import "./index.css";
import Cart from "../cart";
import Recommended from "../recommended";

// this component displays all products fetched from api
function ProductsPage() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  function fetchProducts() {
    axios.get(API).then((res) => {
      console.log(res?.data);
      setProduct(res?.data);
      console.log(product);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/** displays cart products only if some items are present in cart */}

      {open && (
        <>
          <Cart
            open={open}
            setOpen={setOpen}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </>
      )}
      {/** displays recommended products only if some items are present in cart */}

      {cartProducts?.length > 0 && (
        <Recommended
          product={product}
          cartProducts={cartProducts}
          open={open}
          setOpen={setOpen}
        />
      )}
      <>
        {/** display all products */}
        <div className="header-container">
          <h1>All Products </h1>
          <span>
            <button onClick={() => setOpen(true)}>
              view cart ({cartProducts?.length})
            </button>
          </span>
        </div>
        <div className="all-products">
          {product?.map((item, index) => (
            <Product
              item={item}
              key={index}
              open={open}
              setOpen={setOpen}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          ))}
        </div>
      </>
    </div>
  );
}

export default ProductsPage;
