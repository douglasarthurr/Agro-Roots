import React from "react";
import Navbar from "../components/Navbar.jsx";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import '../css/midias.css';

export default function Midias(){
    return(
        <div>
            <Navbar/>
            <div class="containerMD">
                <a href="https://www.instagram.com/_agroroots/" target="_blank" rel="noopener noreferrer"><BsInstagram class="icons" /></a>
                <a href="https://wa.me/5569993263963?text=Aooo%C3%B4%20Companheiro,%20vim%20pelo%20site%20da%20Agro%20Roots,%20queria%20conhecer%20mais%20sobre%20sua%20marca!" target="_blank" rel="noopener noreferrer"><BsWhatsapp class="icons"/></a>
            </div>
        </div>
    )
};
