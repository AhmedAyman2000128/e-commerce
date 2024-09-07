import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/open-sans";
import Home from "./Pages/home/home";
import Loading from "./Pages/HomeLoading/loading";
import { addItemToCart, removeItemFromCart } from "./cartProductsFunctions";
function App() {
  //Displayed products
  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentMaxPrice, setCurrentMaxPrice] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  //Initializing cart to be empty
  if (!JSON.parse(localStorage.getItem("cartProducts"))) {
    localStorage.setItem("cartProducts", "[]");
  }
  //return products and add them to the local storage
  async function getProducts() {
    try {
      //const response = await fetch("https://fakestoreapi.com/products/");
      const response = await fetch(
        "https://fakestoreapi.com/products/" //"https://fake-store-api.mock.beeceptor.com/api/products"
      );
      if (!response.ok) {
        throw Error("Products not fetched");
      }
      const loadedProducts = await response.json();
      setProductList(loadedProducts);
      localStorage.setItem("products", JSON.stringify(loadedProducts));
    } catch (error) {
      console.log("couldnot fetch the products");
    }
  }
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProductList(JSON.parse(storedProducts));
    } else {
      getProducts();
    }
  }, []);
  //handle filters
  useEffect(() => {
    setProductList(
      getProductsFromLocal().filter((product) => {
        return (
          (product.category === currentCategory || currentCategory === "All") &&
          (+product.price <= +currentMaxPrice || currentMaxPrice === "") &&
          (product.title.includes(currentSearch) || currentSearch === "")
        );
      })
    );
  }, [currentCategory, currentMaxPrice, currentSearch]);
  function getProductsFromLocal() {
    return JSON.parse(localStorage.getItem("products"));
  }
  function handleAddToCartClick(product_id) {
    addItemToCart({
      ...productList.find((product) => product.id === product_id),
    });
  }

  function handleCategoryChange(category) {
    setCurrentCategory(category);
  }
  function handleSearchChange(text) {
    setCurrentSearch(text);
  }
  function handleMaxPriceChange(price) {
    setCurrentMaxPrice(price);
  }
  function handleRemoveFromCartClickInHome(product) {
    removeItemFromCart(product);
  }
  if (productList.length === 0 && !getProductsFromLocal()) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Home
        categoryset={
          new Set(
            getProductsFromLocal().map((product) => {
              return product.category;
            })
          )
        }
        products={productList}
        handleAddToCartClick={handleAddToCartClick}
        handleCategoryChange={handleCategoryChange}
        handleSearchChange={handleSearchChange}
        handleMaxPriceChange={handleMaxPriceChange}
        handleRemoveFromCartClickInHome={handleRemoveFromCartClickInHome}
      />
    </div>
  );
}
export default App;
