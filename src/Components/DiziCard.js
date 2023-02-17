import React from "react";
import Search from "./Search";

const DiziCard = ({ setSecilenDizi, secilenDizi, data, ekle, detayaGit }) => {
  return (
    <div className="diziDetayMainDiv">
      <Search
        setSecilenDizi={setSecilenDizi}
        secilenDizi={secilenDizi}
        data={data}
      ></Search>
      {secilenDizi !== "" ? (
        <div className="diziDetayCard">
          <div className="posterDiv">
            <img src={secilenDizi.image_thumbnail_path} alt="dizi resim"></img>
          </div>
          <div className="bilgilerDiv">
            <div className="detayDizimIsim">{secilenDizi.name}</div>
            <div className="detayDizimUlke">{secilenDizi.country}</div>
            <button onClick={() => ekle()}>Ekle</button>
            <button onClick={detayaGit}>Detay</button>
          </div>
        </div>
      ) : (
        <div className="detayUyari">Önce popüler dizi seçimi yapın</div>
      )}
    </div>
  );
};

export default DiziCard;
