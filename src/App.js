import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Detay from "./Components/Detay";
import { Route, useHistory } from "react-router-dom";
import DiziCard from "./Components/DiziCard";
import PopulerDiziListesi from "./Components/PopulerDiziListesi";
import IzlemeListesi from "./Components/IzlemeListesi";
import DiziOlustur from "./Components/DiziOlustur";

function App() {
  const [data, setData] = useState([]);
  const [secilenDizi, setSecilenDizi] = useState("");
  const [listeDizi, setListeDizi] = useState("");
  const [secilenDiziDetay, setSecilenDiziDetay] = useState();
  const [page, setPage] = useState(1);

  let history = useHistory();

  useEffect(() => {
    axios
      .get(`https://www.episodate.com/api/most-popular?page=${page}`)
      .then((response) => {
        setData(response.data.tv_shows);
      });
  }, [page]);

  const ekle = () => {
    if (!listeDizi.includes(secilenDizi)) {
      setListeDizi([...listeDizi, secilenDizi]);
    }
  };

  const sil = (elem) => {
    setListeDizi([...listeDizi.filter((item) => item.name !== elem.name)]);
  };

  const detayaGit = () => {
    axios
      .get(`https://www.episodate.com/api/show-details?q=${secilenDizi.id}`)
      .then((response) => setSecilenDiziDetay(response.data.tvShow));

    history.push("/detay");
  };

  const geriDon = () => {
    setSecilenDiziDetay("");
    history.push("/");
  };

  const pageDegis = (newPage) => {
    newPage > 0 && setPage(newPage);
  };

  return (
    <div className="anaSayfaLayout">
      <Route exact path="/">
        <PopulerDiziListesi
          data={data}
          setSecilenDizi={setSecilenDizi}
          page={page}
          pageDegis={pageDegis}
        ></PopulerDiziListesi>
        <DiziCard
          setSecilenDizi={setSecilenDizi}
          secilenDizi={secilenDizi}
          data={data}
          ekle={ekle}
          detayaGit={detayaGit}
          page={page}
          history={history}
        ></DiziCard>
        <IzlemeListesi listeDizi={listeDizi} sil={sil}></IzlemeListesi>
      </Route>
      <Route exact path="/detay">
        <Detay
          secilenDizi={secilenDizi}
          secilenDiziDetay={secilenDiziDetay}
          geriDon={geriDon}
        ></Detay>
      </Route>
      <Route exact path="/diziolustur">
        <DiziOlustur></DiziOlustur>
      </Route>
    </div>
  );
}

export default App;
