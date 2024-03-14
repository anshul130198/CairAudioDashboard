import React, { useState, useEffect } from "react";
import Header from "../Screens/Header/Header";
import Sidebar from "../Screens/Sidebar/Sidebar";
import Footer from "../Screens/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const wasLogin = location.state && location.state.previousPathname === "/login";
    if (wasLogin) {
      navigate("", { state: null })
      setTimeout(() => {
        window.location.reload();
      },0);
    }
  }, [location.state])

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
