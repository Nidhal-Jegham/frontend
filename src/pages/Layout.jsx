import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Loading from "./loading";

const Layout = ({ loading }) => {
  if (loading) {
    return (
      <>
        <Loading />
        <Outlet />
      </>
    );
  } else
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
};

export default Layout;
