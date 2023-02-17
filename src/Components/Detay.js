import React from "react";
//bu sayfada kaldın detayların url sini bulamadın
const Detay = ({ secilenDiziDetay, geriDon }) => {
  return (
    <div className="detaySayfasiKapsayiciDiv">
      <div className="detaySayfasiDiv">
        <div>{secilenDiziDetay?.description}</div>
        <button onClick={geriDon}>Geri Dön</button>
      </div>
    </div>
  );
};

export default Detay;
