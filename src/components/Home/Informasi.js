import React from "react";
import "./css/Informasi.css";
import slide1 from "../image/Home/slide_1.jpg";

const isi = () => {
  return (
    <section className="beach-cleanup">
      <div className="text-content">
        <h1>
          <span className="highlight">TEMU MART</span> Yuk, cari tahu informasi lengkapnya di sini!
        </h1>
        <p>
        Kami menyediakan Informasi yang dapat membantu bapak dan ibu sekalian untuk mengetahui pasar apa saya yang terdia di Kota Bogor
        Dan Informasi tentang Mini Market yang tersedia di kota Bogor
        </p>
      </div>
      <div className="image-container">
        <img src={slide1} alt="Beach Cleanup" />
      </div>
    </section>
  );
};

export default isi;
