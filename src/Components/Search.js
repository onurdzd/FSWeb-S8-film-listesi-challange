import React, { useEffect, useState } from "react";

const Search = ({ setSecilenDizi, data }) => {
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
      <p className="searchBaslik"> Dizi arayabilirsin</p>
      <input
        className="inputForm"
        type="text"
        placeholder="Ara"
        onChange={(e) => handleSearch(e)}
      ></input>
    </form>
  );
};

export default Search;
