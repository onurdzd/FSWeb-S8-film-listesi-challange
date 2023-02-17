import React from "react";

const PopulerDiziListesi = ({ data, setSecilenDizi, page, pageDegis }) => {
  return (
    <div className="populerDizilerMain">
      <h1>Popüler Diziler</h1>
      <ul className="populerDizilerIcerik">
        {" "}
        {data.map((item, index) => (
          <div
            key={index}
            className="populerDiziIsim"
            onClick={() => setSecilenDizi(item)}
          >
            <li>{item.name}</li>
          </div>
        ))}{" "}
      </ul>
      <div className="pageNumberDiv">
        <div>
          <button onClick={() => pageDegis(page - 1)} disabled={page === 1}>
            Önceki
          </button>
        </div>
        <div>{page}</div>
        <div>
          <button onClick={() => pageDegis(page + 1)}>Sonraki</button>
        </div>
      </div>
    </div>
  );
};

export default PopulerDiziListesi;
