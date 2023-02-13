import React from "react";

const Search = ({ setSecilenDizi, secilenDizi, data }) => {
  const handleSearch = (e) => {
    const aramaSonuc = data.find((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    if (aramaSonuc) {
      setSecilenDizi(aramaSonuc);
    } else {
      setSecilenDizi("");
    }
  };

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
