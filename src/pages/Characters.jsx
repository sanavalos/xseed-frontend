import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";
import { setFavorite } from "../actions/favoritesActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

function Characters() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const { planets } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getPlanets());
  }, []);

  const findHomeworld = (homeworld) => {
    const { name } = planets.find((planet) => planet.url === homeworld);
    return name;
  };

  return (
    <div>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      {planets.length > 0 &&
        characters?.map(({ url, name, gender, birth_year, homeworld }) => (
          <div key={url}>
            <h1>{name}</h1>
            <h2>{gender}</h2>
            <h2>{birth_year}</h2>
            <h2>{findHomeworld(homeworld)}</h2>
            <FavoriteBorderIcon
              sx={{ "&:hover": { color: "red", cursor: "pointer" } }}
              onClick={() =>
                dispatch(
                  setFavorite({
                    url,
                    name,
                    gender,
                    birth_year,
                    planet: findHomeworld(homeworld),
                  })
                )
              }
            />
          </div>
        ))}
    </div>
  );
}

export default Characters;
