import "./productContainer.css";
export default function ProductContainer({ children }) {
  return (
    <div className="product-container">
      <div className="container">{children}</div>
    </div>
  );
}
