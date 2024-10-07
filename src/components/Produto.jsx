import React from "react";
import '../css/produto.css';
import { Link } from 'react-router-dom';

export default function Produto(Props) {
    return (
        <Link to={Props.link}>
            <div className="produto">
                <div className="containerImgProduto">
                    <img id="imgProduto" src={Props.foto} alt="Produto" />
                </div>
                <p id="tituloProduto">{Props.titulo}</p>
            </div>
        </Link>
    );
}
