import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'
import '../css/navbar.css'
import React from 'react';



export default function Navbar() {
  return (
    <div class="containerNV">
      <nav class='navbar'>
        <div >
          <img class='logo' src={logo} alt="logo" />
        </div>
        <div class='paginas'>
          <Link class='hrefs' to={"/"}>HOME</Link>
          <Link class='hrefs' to={"/produto"}>PRODUTO</Link>
          <Link class='hrefs' to={"/midias"}>MÍDIAS</Link>
          
        </div>
      </nav>
    </div>
    
  );
};