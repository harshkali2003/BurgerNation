import React  from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
 
  return (
    <div class="flex bg-orange-700 h-14 w-full text-xl items-center sticky top-0 text-white">
      <div class="text-4xl mr-32 ml-8  ">
        <h1>Burger <span class="text-indigo-700 text-5xl">Nation</span></h1>
      </div>
      <div class="ml-40 text-2xl">
        <Link to="/" class="m-8  active:text-orange-600">HOME</Link>
        <Link to="/product" class="m-8  active:text-orange-600 ">PRODUCTS</Link>
        <Link to="/about" class="m-8  active:text-orange-600 ">ABOUT</Link>
        <Link to="/user" class="m-8  active:text-orange-600 ">USER</Link>
      
      </div>
    </div>
  ); 
}
