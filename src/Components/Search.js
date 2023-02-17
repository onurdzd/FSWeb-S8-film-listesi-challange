import React, { useEffect, useState } from "react";

const Search = ({ setSecilenDizi, data, page }) => {
  const [aramaSonuc, setAramaSonuc] = useState();
  const handleSearch = (e) => {
    if (e.target.value) {
      setAramaSonuc(
        data.find((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setAramaSonuc("");
    }
  };

  useEffect(() => {
    aramaSonuc ? setSecilenDizi(aramaSonuc) : setSecilenDizi("");
  }, [aramaSonuc]);

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
