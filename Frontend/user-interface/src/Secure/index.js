import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
// import Home from "./Home";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import CartDetails from "./Checkout/CartDetails";
import DeliveryInfo from "./Checkout/DeliveryInfo";
import MyOrder from "./MyOrders/MyOrder";
import Footer from "../Components/Footer";
import StoreContextProvider from "../ContextAPI/StoreContext";

const NotFound = () => <h2>404 Not Found (secure)</h2>;

export default function Secure() {
  return (
    <>
      {/* <Sidebar> */}  
      <Navbar/>
      <StoreContextProvider>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Cart" element={<CartDetails />} />
          <Route path="/Delivery" element={<DeliveryInfo />} />
          <Route path="/MyOrders" element={<MyOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StoreContextProvider>
        <Footer/>
      {/* </Sidebar> */}
    </>
  );
}
