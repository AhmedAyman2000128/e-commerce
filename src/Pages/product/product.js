import Footer from "../../Components/Footer/footer";
import NavBar from "../../Components/navBar/navBar";
import ProductInfo from "../../Components/productInfo/productInfo";
import "./product.css";
import { useLocation } from "react-router-dom";
export default function ProductPage() {
  const location = useLocation();
  const product = location.state?.product;
  return (
    <>
      <NavBar isSearchShown={false} />
      <ProductInfo product={product} />
      <Footer />
    </>
  );
}
