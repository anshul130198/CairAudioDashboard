import React from "react";
import Header from "../Screens/Header/Header";
import Sidebar from "../Screens/Sidebar/Sidebar";
import Footer from "../Screens/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
