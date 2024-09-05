import "./product.css";

export default function Product({
  title,
  price,
  description,
  category,
  imgsrc,
}) {
  return (
    <div className="product">
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
          }}
        >
          Add To Cart
        </button>
        <p className="category">{category}</p>
      </div>
    </div>
  );
}
