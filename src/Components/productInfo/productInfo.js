import { addItemToCart, removeItemFromCart } from "../../cartProductsFunctions";
import "./productInfo.css";
import { useState } from "react";
import { getCartProducts } from "../../cartProductsFunctions";
export default function ProductInfo({ product }) {
  const inCartCountIndex = getCartProducts().findIndex(
    (item) => item.id === product.id
  );
  const [inCartCount, setInCartCount] = useState(
    inCartCountIndex === -1 ? 0 : getCartProducts()[inCartCountIndex].count
  );
  return (
    <div className="product-info">
      <div className="container">
        <img src={product.imgsrc} alt="" />
        <div className="info">
          <h1>{product.title || product.name}</h1>
          <h3>{product.price}</h3>
          <h2>Product Details</h2>
          <p>
            <b>category : </b>
            {product.category}
          </p>
          <p>
            <b>Description :</b> {product.description}
          </p>
          <div className="price-info">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInCartCount((inCartCount) => inCartCount + 1);
                addItemToCart(product);
              }}
            >
              Add To Cart
            </button>
            {inCartCount !== 0 ? (
              <div
                className="productInfo-cart-product"
                onClick={(e) => {
                  e.stopPropagation();
                  setInCartCount((inCartCount) => inCartCount - 1);
                  removeItemFromCart(product);
                }}
              >
                <p id="ppp">{inCartCount}</p>
                <p className="productInfo-minus">-</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
