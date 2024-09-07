import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/open-sans";
import Home from "./Pages/home/home";
import Loading from "./Pages/HomeLoading/loading";
import { addItemToCart } from "./cartProducts";
function App() {
  //Displayed products
  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  // const [currentMaxPrice, setCurrentMaxPrice] = useState("");
  // const [currentSearch, setCurrentSearch] = useState("");
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
  //No products return yet
  if (productList.length == 0 && !getProductsFromLocal()) {
    return <Loading />;
  }
  function getProductsFromLocal() {
    return JSON.parse(localStorage.getItem("products"));
  }
  function handleAddToCartClick(product_id) {
    addItemToCart({
      ...productList.find((product) => product.id === product_id),
    });
  }
  // function handleAll() {
  //   setProductList(
  //     getProductsFromLocal().filter((product) => {
  //       return (
  //         (product.category === currentCategory || currentCategory === "All") &&
  //         (+product.price <= +currentMaxPrice || currentMaxPrice === "") &&
  //         (product.title.includes(currentSearch) || currentSearch === "")
  //       );
  //     })
  //   );
  // }
  function handleCategoryChange(category) {
    if (category === "All") {
      setProductList(getProductsFromLocal());
    } else {
      setProductList(
        getProductsFromLocal().filter(
          (product) => product.category === category
        )
      );
    }
    setCurrentCategory(category);
  }
  function handleSearchChange(text) {
    if (text === "") {
      setProductList(getProductsFromLocal());
      return;
    }
    setProductList(
      productList.filter((product) =>
        product.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  }
  function handleMaxPriceChange(price) {
    if (price === "") {
      handleCategoryChange(currentCategory);
      return;
    } else {
      setProductList(
        getProductsFromLocal().filter((product) => {
          return (
            +product.price <= +price &&
            (product.category === currentCategory || product.category === "All")
          );
        })
      );
    }
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
      />
    </div>
  );
}
export default App;
