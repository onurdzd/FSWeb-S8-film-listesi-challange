import React from "react";
import Search from "./Search";
import { useState } from "react";

const DiziCard = ({
  setSecilenDizi,
  secilenDizi,
  data,
  ekle,
  detayaGit,
  page,
  history,
}) => {
  const [aramaBulunamadi, setAramaBulunamadi] = useState();
  const [aramaSonuc, setAramaSonuc] = useState();

  return (
    <div className="diziCardMain">
      <Search
        setSecilenDizi={setSecilenDizi}
        secilenDizi={secilenDizi}
        data={data}
        page={page}
        aramaSonuc={aramaSonuc}
        setAramaSonuc={setAramaSonuc}
        aramaBulunamadi={aramaBulunamadi}
        setAramaBulunamadi={setAramaBulunamadi}
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
      ) : !aramaBulunamadi & (secilenDizi === "") ? (
        <div className="diziCardUyari">Önce popüler dizi seçimi yapın</div>
      ) : (
        <div className="diziCardUyari">{aramaBulunamadi}</div>
      )}
      <div className="diziOlusturButtonDiv">
        <button onClick={() => history.push("/diziolustur")}>
          Yeni dizi oluştur
        </button>
      </div>
    </div>
  );
};

export default DiziCard;
