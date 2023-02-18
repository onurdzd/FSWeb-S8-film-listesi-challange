import React from "react";

const DiziOlustur = () => {
  //handlechange eklenip data güncellenecek
  return (
    <div className="diziOlusturMain">
      <div className="diziOlusturAltDiv">
        <label>
          Dizi resim url :
          <input type="text" placeholder="Dizi resim url adresi gir"></input>
        </label>
      </div>
      <div className="diziOlusturAltDiv">
        <label>
          Dizi isim : <input type="text" placeholder="Dizi ismini yaz"></input>
        </label>
      </div>
      <div className="diziOlusturAltDiv2">
        <button>Ekle</button>
        <button>Geri Dön</button>
      </div>
    </div>
  );
};

export default DiziOlustur;
