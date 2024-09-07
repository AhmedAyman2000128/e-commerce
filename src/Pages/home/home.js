import NavBar from "../../Components/navBar/navBar";
import FilterSection from "../../Components/filterSection/filter";
import ProductContainer from "../../Components/productsContainer/productContainer";
import Footer from "../../Components/Footer/footer";
export default function Home({
  categoryset,
  products,
  handleAddToCartClick,
  handleCategoryChange,
  handleSearchChange,
  handleMaxPriceChange,
}) {
  return (
    <>
      <NavBar isSearchShown={true} handleSearchChange={handleSearchChange} />
      <FilterSection
        categoryList={[...categoryset]}
        handleCategoryChange={handleCategoryChange}
        handleMaxPriceChange={handleMaxPriceChange}
      />
      <ProductContainer
        products={products}
        handleAddToCartClick={handleAddToCartClick}
      ></ProductContainer>
      <Footer />
    </>
  );
}
