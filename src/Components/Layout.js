import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./footer";
// import "../style/Home/style.css";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
