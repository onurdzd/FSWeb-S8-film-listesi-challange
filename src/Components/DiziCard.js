import React from "react";
import Search from "./Search";

const DiziCard = ({
  setSecilenDizi,
  secilenDizi,
  data,
  ekle,
  detayaGit,
  page,
}) => {
  return (
    <div className="diziCardMain">
      <Search
        setSecilenDizi={setSecilenDizi}
        secilenDizi={secilenDizi}
        data={data}
        page={page}
      ></Search>
      {secilenDizi !== "" ? (
        <div className="diziCardAltDiv">
          <div className="diziCardImgDiv">
            <img
              src={secilenDizi.image_thumbnail_path}
              alt="diziCardImg resim"
            ></img>
          </div>
          <div className="diziCardBilgilerDiv">
            <div className="diziCardBilgilerIsim">{secilenDizi.name}</div>
            <div className="diziCardBilgilerUlke">{secilenDizi.country}</div>
            <button onClick={() => ekle()}>Ekle</button>
            <button onClick={detayaGit}>Detay</button>
          </div>
        </div>
      ) : (
        <div className="diziCardYoksaUyari">Önce popüler dizi seçimi yapın</div>
      )}
    </div>
  );
};

export default DiziCard;
