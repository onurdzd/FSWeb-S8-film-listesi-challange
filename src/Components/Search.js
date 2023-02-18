import React from "react";

const Search = ({
  setSecilenDizi,
  data,
  page,
  setAramaBulunamadi,
  setAramaSonuc,
  aramaSonuc,
}) => {
  const handleSearch = (e) => {
    if (e.target.value) {
      setAramaSonuc(
        data.find((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      aramaSonucKontrol(e);
    } else {
      setAramaSonuc("");
      setAramaBulunamadi("");
      setSecilenDizi("");
    }
  };

  const aramaSonucKontrol = (e) => {
    console.log(aramaSonuc, e.target.value);
    if (aramaSonuc) {
      //arama inputu bos olunca dizi hala duruyor
      setSecilenDizi(aramaSonuc);
      setAramaBulunamadi("");
    } else {
      setAramaBulunamadi(`Aradığın dizi ${page}. sayfada yok`);
      setSecilenDizi("");
    }
  };

  return (
    <form className="searchForm">
      <p className="searchBaslik">{page}. sayfada Dizi ara</p>
      <input
        className="searchInputForm"
        type="text"
        placeholder="Ara"
        onChange={(e) => handleSearch(e)}
      ></input>
    </form>
  );
};

export default Search;
