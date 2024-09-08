import Footer from "../../Components/Footer/footer";
import NavBar from "../../Components/navBar/navBar";
import ProductInfo from "../../Components/productInfo/productInfo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ProductPage() {
  const location = useLocation();
  const product = location.state?.product;
  useEffect(() => {
    document.title = "Elgondi Store";
  }, []);
  return (
    <>
      <NavBar isSearchShown={false} />
      {console.log(product)}
      <ProductInfo product={product} />
      <Footer />
    </>
  );
}
