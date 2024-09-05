import Cart from "../../Components/Cart/cart";
import NavBar from "../../Components/navBar/navBar";

export default function CartPage({ products }) {
  return (
    <>
      <NavBar isSearchShown={false} />
      <Cart products={products} />
    </>
  );
}
