import React, { useEffect } from "react";
import "../css/slider.css";
import foto1 from "../assets/images/fundo branco 1.jpg";
import foto2 from "../assets/images/fundo branco 2.jpg";
import foto3 from "../assets/images/fundo branco 3.jpg";

let count = 1;

function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

export default function Slider() {
  useEffect(() => {
    document.getElementById("radio1").checked = true;
    const interval = setInterval(nextImage, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {/* Radio buttons */}
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        {/* Radio buttons */}

        {/* slide images */}
        <div className="slide first">
          <img src={foto1} alt="Boné 1" />
        </div>

        <div className="slide">
          <img src={foto2} alt="Boné 2" />
        </div>

        <div className="slide">
          <img src={foto3} alt="Boné 3" />
        </div>
        {/* slide images */}

        {/* Navigation auto */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
}
