import React from "react";
import { useContext } from "react";
import FavoriteConext from "../context/favoritesContext";

const likeHeart = "💖";
const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteConext);
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div className="navbar-image-container">
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div className="likeHeart-container">
        {likeHeart}
        {favoritePokemons.length}
      </div>
    </nav>
  );
};

export default Navbar;
