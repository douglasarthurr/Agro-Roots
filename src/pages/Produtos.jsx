import React from "react";
import Navbar from "../components/Navbar.jsx";
import Produto from "../components/Produto.jsx";
import fotoPrincipal from "../assets/images/fundo branco 3.jpg";
import fotoRoots from "../assets/images/foto roots frente.jpg";
import "../css/produto.css"

export default function Produtos(){
    return(
        <div>
            <Navbar/>
            <div class="containerPD">
                <h1 class="titulo">Produtos</h1>
                <section class="produtosPage">
                    <Produto link={"boneBerrante"} foto={fotoPrincipal} titulo="Boné Trucker Berrante"/>
                    <Produto link={"boneRoots"} foto={fotoRoots} titulo="Boné Trucker Roots Edition"/>
                </section>
            </div>
        </div>
    )
};