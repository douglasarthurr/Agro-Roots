import React from "react";
import Navbar from "../components/Navbar.jsx";
import Produto from "../components/Produto.jsx";
import fotoPrincipal from "../assets/images/fundo branco 3.jpg";
import "../css/produto.css"

export default function Produtos(){
    return(
        <div>
            <Navbar/>
            <div class="containerPD">
                <h1 class="titulo">Produtos</h1>
                <section class="produtosPage">
                    <Produto foto={fotoPrincipal} titulo="Boné Trucker Berrante Berge com Marrom"/>
                </section>
            </div>
        </div>
    )
};