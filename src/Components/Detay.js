import React from "react";
//bu sayfada kaldın detayların url sini bulamadın
const Detay = ({ secilenDiziDetay, geriDon }) => {
  return (
    <div className="detaySayfasiKapsayiciDiv">
      <div className="detaySayfasiDiv">
        {secilenDiziDetay ? (
          <>
            <div>{secilenDiziDetay?.description}</div>
            <button onClick={geriDon}>Geri Dön</button>
          </>
        ) : (
          <div>Sayfa Yükleniyor...</div>
        )}
      </div>
    </div>
  );
};

export default Detay;
