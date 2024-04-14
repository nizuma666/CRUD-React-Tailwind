import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
