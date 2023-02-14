import React, { useEffect, useState } from "react";

const Search = ({ setSecilenDizi, data }) => {
  const [aramaSonuc, setAramaSonuc] = useState();
  const handleSearch = (e) => {
    setAramaSonuc(
      data.find((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (aramaSonuc) {
      setSecilenDizi(aramaSonuc);
    } else {
      setSecilenDizi("");
    }
  }, [aramaSonuc]);

  return (
    <form className="searchForm">
      Dizi arayabilirsin
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
