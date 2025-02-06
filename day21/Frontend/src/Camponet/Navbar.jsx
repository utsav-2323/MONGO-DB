import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import "./Navbar.css";


function Navbar() {
  return (
    <>
    <div className="navbar w-full h-[80px] bg-black text-white">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  </>
  );
}

export default Navbar;