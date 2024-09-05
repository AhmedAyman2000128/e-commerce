import { useEffect, useState } from "react";
import "./App.css";
import Product from "./Components/product/product";
import "@fontsource/open-sans";
import ProductPage from "./Pages/product/product";
import Home from "./Pages/home/home";
import CartPage from "./Pages/Cart/cart";
import NavBar from "./Components/navBar/navBar";
import FilterSection from "./Components/filterSection/filter";
import Loading from "./Pages/HomeLoading/loading";

function App() {
  async function getProducts() {
    try {
      //const response = await fetch("https://fakestoreapi.com/products/");
      const response = await fetch(
        "https://fake-store-api.mock.beeceptor.com/api/products"
      );
      if (!response.ok) {
        throw Error("Products not fetched");
      }
      setProductList(await response.json());
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
  const [productList, setProductList] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(productList));
  // }, productList);
  if (productList.length == 0) {
    return <Loading />;
  }
  const products = productList.map((product) => {
    return (
      <Product
        category={product.category}
        description={product.description}
        imgsrc={product.image}
        price={product.price}
        title={product.title}
        key={product.product_id}
      />
    );
  });

  return (
    <div className="App">
      <Home
        categoryset={
          new Set(
            productList.map((product) => {
              return product.category;
            })
          )
        }
        products={products}
      />
    </div>
    // <CartPage products={[productList[0], productList[1]]} />
    // <ProductPage product={productList[0]} />
  );
}
export default App;
