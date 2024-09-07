import Cart from "../../Components/Cart/cart";
import Footer from "../../Components/Footer/footer";
import NavBar from "../../Components/navBar/navBar";

export default function CartPage() {
  return (
    <>
      <NavBar isSearchShown={false} />
      <Cart />
      <Footer />
    </>
  );
}
