import NavBar from "../../Components/navBar/navBar";
import ProductInfo from "../../Components/productInfo/productInfo";
import "./product.css";
export default function ProductPage({ product }) {
  return (
    <>
      <NavBar isSearchShown={false} />
      <ProductInfo product={product} />
    </>
  );
}
