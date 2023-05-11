import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DiziOlustur = () => {

  const history=useHistory()

  const geriDon = () => {
    history.push("/");
  };

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
        <button onClick={geriDon}>Geri Dön</button>
      </div>
    </div>
  );
};

export default DiziOlustur;
