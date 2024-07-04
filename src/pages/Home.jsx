import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../css/home.css'

import Slider from "../components/Slider.jsx"

export default function Home(){
    return(
        <section class="body">
            <Navbar/>
            <div class="containerGeral">
                <Slider/>
                <div class="containerQS">
                    <h1 class="titulo">Quem Somos</h1>
                    <p class="texto">Somos apaixonados pelo estilo country e pela autenticidade do campo. Na Agro Roots, nossa missão é levar essa paixão para o mundo através de bonés que representam o verdadeiro espírito do agro brasileiro. Cada boné é cuidadosamente projetado para refletir nossa dedicação à tradição e ao estilo country. A Agro Roots é mais que uma marca de bonés - é um modo de vida, criada por um amante da moda country, refletindo o verdadeiro espírito do agro brasileiro. Junte-se a nós e vista o orgulho do campo com Agro Roots! 🌾🤠</p>
                </div>
            </div>
        
        </section>
    )
}