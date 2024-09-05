import "./cart.css";
import CartProduct from "./cart_product";
export default function Cart({ products }) {
  return (
    <div className="cart">
      <div className="container">
        <div className="products-in-cart">
          {products.map((product) => {
            return (
              <CartProduct
                category={product.category}
                image={product.image}
                price={product.price}
                title={product.name || product.title}
              />
            );
          })}
        </div>
        <div className="order-summary">
          <div id="price-info">
            <h2>Total Price</h2>
            <hr />
            <p>Actual Price {/* */}</p>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
