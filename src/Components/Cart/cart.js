import "./cart.css";
import CartProduct from "./cart_product";
import { useState } from "react";
import {
  getCartProducts,
  addItemToCart,
  removeItemFromCart,
} from "../../cartProductsFunctions";
export default function Cart() {
  const [cart_products, set_cart_products] = useState(getCartProducts());
  function handleAddClick(product) {
    addItemToCart(product);
    set_cart_products(getCartProducts());
  }
  function handleRemoveClick(product) {
    removeItemFromCart(product);
    set_cart_products(getCartProducts());
  }
  return (
    <div className="cart">
      <div className="container">
        <div className="products-in-cart">
          {cart_products.length === 0 ? (
            <div className="empty-cart">Empty Cart</div>
          ) : (
            cart_products.map((product) => {
              return (
                <CartProduct
                  product={product}
                  handleAddClick={handleAddClick}
                  handleRemoveClick={handleRemoveClick}
                />
              );
            })
          )}
        </div>
        <div className="order-summary">
          <div id="price-info">
            <h2>Total Price</h2>
            <hr />
            <p>
              {cart_products
                .reduce((acc, product) => {
                  return acc + product.count * product.price;
                }, 0)
                .toFixed(1)}
            </p>
          </div>
          <button
            onClick={() => {
              localStorage.setItem("cartProducts", "[]");
              alert("Successful Checkout");
              set_cart_products([]);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
