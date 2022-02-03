import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const { onSearch } = props;

  const onChange = (evt) => {
    setSearch(evt.target.value);
    if (evt.target.value.lenght === 0) {
      onSearch(null);
    }
  };
  const onClick = async (evt) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
