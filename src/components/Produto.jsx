import React from "react";
import '../css/produto.css'
import { Link } from 'react-router-dom';

export default function Produto(Props){
    return(
        <Link to={"/produto/bone"}>
            <div class="produto">
                <img id="imgProduto" src={Props.foto} alt="Produto" />
                <p id="tituloProduto">{Props.titulo}</p>
                {/* <a id="linkCompra" href="https://wa.me/5569993263963?text=Aooo%C3%B4%20Companheiro,%20vim%20pelo%20site%20da%20Agro%20Roots,%20gostaria%20de%20ver%20mais%20sobre%20o%20modelo%20de%20bon%C3%A9%20Trucker%20Berrante%20Berge%20com%20Marrom%F0%9F%A4%A0" target="_blank" rel="noopener noreferrer">Ver Produto</a> */}
            </div>
        </Link>
    )
}