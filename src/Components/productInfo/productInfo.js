import "./productInfo.css";

export default function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <div className="container">
        <img src={product.image} alt="" />
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
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
