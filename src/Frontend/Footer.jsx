import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="w-screen h-24 grid grid-cols-3 bg-orange-700 rounded-lg content-evenly bottom-0">
      <div class="flex justify-center items-center text-xl text-white">
        <p>BURGER NATION</p>
      </div>
      <div class="grid grid-rows-3 list-none text-white">
        <li >
          <p> <Link to="/product">PRODUCT</Link></p>
        </li>
        <li>
          <p><Link to="/menu">MENU</Link></p>
        </li>
        <li>
          <p><Link to="/feedback">FEEDBACK</Link></p>
        </li>
      </div>
      <div class="grid grid-rows-2 list-none text-white">
        <li>PHONE <p>915526373</p></li>
        <li>E-MAIL <p>email@eamil.com</p></li>
      </div>
    </div>
  );
}
