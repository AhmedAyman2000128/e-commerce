import "./productContainer.css";
import Product from "../product/product";
export default function ProductContainer({
  products,
  handleAddToCartClick,
  handleRemoveFromCartClickInHome,
}) {
  return (
    <div className="product-container">
      <div className="container">
        {products.map((product) => {
          return (
            <Product
              id={product.id}
              category={product.category}
              description={product.description}
              imgsrc={product.image}
              price={product.price}
              title={product.title}
              key={product.id}
              handleAddToCartClick={handleAddToCartClick}
              handleRemoveFromCartClickInHome={handleRemoveFromCartClickInHome}
            />
          );
        })}
      </div>
    </div>
  );
}
