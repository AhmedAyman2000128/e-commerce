import "./cart_product.css";
export default function CartProduct({
  image,
  title,
  price,
  category,
  amount = 0,
}) {
  return (
    <div className="cart-product">
      <img src={image} alt="" />
      <div className="cart-product-info">
        <h3>{title}</h3>
        <p id="cat">{category}</p>
        <div className="amount-price">
          <div id="amount">
            <button className="remove-btn">-</button>
            <p>{amount}</p>
            <button className="add-btn">+</button>
          </div>
          <p id="price">{price}</p>
        </div>
      </div>
    </div>
  );
}
