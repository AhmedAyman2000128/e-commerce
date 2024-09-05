import NavBar from "../../Components/navBar/navBar";
import FilterSection from "../../Components/filterSection/filter";
import ProductContainer from "../../Components/productsContainer/productContainer";
export default function Home({ categoryset, products }) {
  return (
    <>
      <NavBar isSearchShown={true} />
      <FilterSection categoryList={[...categoryset]} />
      <ProductContainer>{products}</ProductContainer>
    </>
  );
}
