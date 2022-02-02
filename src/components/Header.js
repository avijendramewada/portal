import React from "react";
import "../styles/header.css";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
   <div class="topnav">
  <a class="active" href="#home"><FiMenu/></a>
  
  <input type="text" placeholder="Search.."/>
</div>
  );
}
export default Header