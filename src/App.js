import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

function App() {
  const [data, setData] = useState([]);
  const [secilenDizi, setSecilenDizi] = useState("");
  const [listeDizi, setListeDizi] = useState("");

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => {
        setData(response.data.tv_shows);
      });
  }, []);

  const ekle = () => {
    if (!listeDizi.includes(secilenDizi)) {
      setListeDizi([...listeDizi, secilenDizi]);
    }
  };

  const sil = (elem) => {
    setListeDizi([...listeDizi.filter((item) => item.name !== elem.name)]);
  };

  return (
    <div className="anaSayfaLayout">
      <div className="populerDiziler">
        <h1>Popüler Diziler</h1>
        <ul className="populerDizilerIcerik">
          {" "}
          {data.map((item, index) => (
            <div
              key={index}
              className="populerDiziIsım"
              onClick={() => setSecilenDizi(item)}
            >
              <li>{item.name}</li>
            </div>
          ))}{" "}
        </ul>
      </div>
      <div className="diziDetayMainDiv">
        <Search
          setSecilenDizi={setSecilenDizi}
          secilenDizi={secilenDizi}
          data={data}
        ></Search>
        {secilenDizi !== "" ? (
          <div className="diziDetayCard">
            <div className="posterDiv">
              <img
                src={secilenDizi.image_thumbnail_path}
                alt="dizi resim"
              ></img>
            </div>
            <div className="bilgilerDiv">
              <div className="detayDizimIsim">{secilenDizi.name}</div>
              <div className="detayDizimUlke">{secilenDizi.country}</div>
              <button onClick={() => ekle()}>Ekle</button>
            </div>
          </div>
        ) : (
          <div className="detayUyari">
            <h1>Dizi Detay</h1>
            <br></br>
            <br></br>
            Önce popüler dizi seçimi yapın
          </div>
        )}
      </div>
      <div className="izlemeListesi">
        <h1>İzleme Listesi</h1>
        {listeDizi !== "" ? (
          <div className="izlemeListesiFlex">
            {listeDizi.map((elem) => (
              <div>
                <div className="izlemeListesiIsimDiv">
                  <div className="izlemeListesiIsim">{elem.name}</div>
                  <div>
                    <button onClick={() => sil(elem)}>Sil</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="izlemeListesiIsim">Henüz bir film eklemediniz</div>
        )}
      </div>
    </div>
  );
}

export default App;
