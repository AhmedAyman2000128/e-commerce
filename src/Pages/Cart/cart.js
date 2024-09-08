import Cart from "../../Components/Cart/cart";
import Footer from "../../Components/Footer/footer";
import NavBar from "../../Components/navBar/navBar";
import { useEffect } from "react";
export default function CartPage() {
  useEffect(() => {
    document.title = "Elgondi Store";
  }, []);
  return (
    <>
      <NavBar isSearchShown={false} />
      <Cart />
      <Footer />
    </>
  );
}
