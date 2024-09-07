import { useNavigate } from "react-router-dom";
import "./product.css";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  imgsrc,
  handleAddToCartClick,
}) {
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
            handleAddToCartClick(id);
          }}
        >
          Add To Cart
        </button>
        <p className="category">{category}</p>
      </div>
    </div>
  );
}
