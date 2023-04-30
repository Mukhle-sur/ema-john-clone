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
import CheckOut from "./components/Checkout/CheckOut";
import SignUp from "./components/signUp/SignUp";
import AuthProvider from "./components/provider/AuthProvider";
import PrivetRoute from "./routes/PrivetRoute";

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
        path: "/checkout",
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
