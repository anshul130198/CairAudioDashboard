import React from "react";
import Header from "../Screens/Header/Header";
import Sidebar from "../Screens/Sidebar/Sidebar";
import Footer from "../Screens/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const token =   useSelector((state) => state.user.userToken);

  return (
    <>
    {token?(
    <>
        <Header />
       <Sidebar />
       <Outlet />
       <Footer />
    </>
    ):(null)}
     
    </>
  );
};

export default Layout;
