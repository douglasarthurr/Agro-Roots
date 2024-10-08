import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import foto1 from '../assets/images/fundo branco 1.jpg';
import foto2 from '../assets/images/fundo branco 2.jpg';
import foto3 from '../assets/images/fundo branco 3.jpg';
// import foto4 from '../assets/images/fundo branco 1.jpg';

import '../css/bone.css'

export default function BoneBerrante(){
    const images = [
        foto1,
        foto2,
        foto3,
        // foto4,
      ];

    const [mainImage, setMainImage] = useState(images[0]);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    return(
        <div>
            <Navbar/>
            <div class="vendasProduto">
                <div className="image-gallery">
                    <div className="main-image">
                        <img src={mainImage} alt="Main" />
                    </div>
                    <div className="thumbnail-images">
                        {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                            className={mainImage === image ? 'active' : ''}
                        />
                        ))}
                    </div>
                </div>
                <div >
                    <p class="valor">Valor: R$ 40,00</p>
                    <div>
                        <a class="linkCompra" href="https://wa.me/5569993116711?text=Aooo%C3%B4%20Companheiro,%20vim%20pelo%20site%20da%20Agro%20Roots,%20gostaria%20de%20ver%20mais%20sobre%20o%20modelo%20de%20bon%C3%A9%20Trucker%20Berrante%20Berge%20com%20Marrom%F0%9F%A4%A0" target="_blank" rel="noopener noreferrer">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}