import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./loader/cartLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/Order Review",
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader,
      },
      {
        path: "/Manage Inventory",
        element: <ManageInventory></ManageInventory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
