import React, { useContext } from "react";
import FavoriteConext from "../context/favoritesContext";
import typeColors from "./TypeColors";
import typeFontColors from "./TypeFontColors";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemon } = useContext(
    FavoriteConext
  );

  const redHeart = "💖";
  const blackHeart = "🖤";

  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (evt) => {
    evt.preventDefault();
    updateFavoritePokemon(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div
                  key={idx}
                  className="pokemon-type-text"
                  style={{
                    backgroundColor: typeColors[type.type.name],
                    color: typeFontColors[type.type.name]
                  }}
                >
                  <b>{type.type.name}</b>
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart}>
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
