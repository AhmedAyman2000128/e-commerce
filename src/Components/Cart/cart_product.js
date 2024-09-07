import "./cart_product.css";
export default function CartProduct({
  product,
  handleAddClick,
  handleRemoveClick,
}) {
  return (
    <div className="cart-product">
      <img src={product.imgsrc || product.image} alt="" />
      <div className="cart-product-info">
        <h3>{product.title}</h3>
        <p id="cat">{product.category}</p>
        <div className="amount-price">
          <div id="amount">
            <button
              className="remove-btn"
              onClick={() => {
                handleRemoveClick(product);
              }}
            >
              -
            </button>
            <p>{product.count}</p>
            <button
              className="add-btn"
              onClick={() => {
                handleAddClick(product);
              }}
            >
              +
            </button>
          </div>
          <p id="price">{(product.count * product.price).toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}
