import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./Pages/Cart/cart";
import ProductPage from "./Pages/product/productPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: (
      <CartPage products={JSON.parse(localStorage.getItem("products"))} />
    ),
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
