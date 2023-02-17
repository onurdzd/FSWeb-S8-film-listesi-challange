import React from "react";

const IzlemeListesi = ({ listeDizi, sil }) => {
  return (
    <div className="izlemeListesi">
      <h1>İzleme Listesi</h1>
      {listeDizi !== "" ? (
        <div className="izlemeListesiFlex">
          {listeDizi.map((elem) => (
            <div className="izlemeListesiCardDiv">
              <div className="izlemeListesiResimDiv">
                <img src={elem.image_thumbnail_path} alt="ufak resim"></img>
              </div>
              <div className="izlemeListesiAltDiv">
                <div className="izlemeListesiIsim">{elem.name}</div>
                <div className="izlemeListesiSilButtonDiv">
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
  );
};

export default IzlemeListesi;
