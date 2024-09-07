import { useNavigate } from "react-router-dom";
import "./product.css";

import { getCartProducts } from "../../cartProductsFunctions";
import { useState } from "react";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  imgsrc,
  handleAddToCartClick,
  handleRemoveFromCartClickInHome,
}) {
  const inCartCountIndex = getCartProducts().findIndex(
    (product) => product.id === id
  );
  const [inCartCount, setInCartCount] = useState(
    inCartCountIndex === -1 ? 0 : getCartProducts()[inCartCountIndex].count
  );
  const navigate = useNavigate();
  const product = {
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
    imgsrc: imgsrc,
  };
  return (
    <div
      className="product"
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/product/${id}`, {
          state: { product },
        });
      }}
    >
      <img src={imgsrc} alt=""></img>
      <div className="info">
        <h3>{title}</h3>
        <h3 className="price">{price}</h3>
      </div>
      <p className="desc">{description}</p>
      <div className="last">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setInCartCount((inCartCount) => inCartCount + 1);
            handleAddToCartClick(id);
          }}
        >
          Add To Cart
        </button>
        {inCartCount !== 0 ? (
          <div
            className="home-cart-product"
            onClick={(e) => {
              e.stopPropagation();
              setInCartCount((inCartCount) => inCartCount - 1);
              handleRemoveFromCartClickInHome(product);
            }}
          >
            <p>{inCartCount}</p>
            <p className="cart-minus">-</p>
          </div>
        ) : null}
        <p className="category">{category}</p>
      </div>
    </div>
  );
}
