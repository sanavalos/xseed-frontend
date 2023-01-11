import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";
import { Link } from "react-router-dom";
import Character from "../components/Character";

function Characters() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const { planets } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getPlanets());
  }, []);

  return (
    <div>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      {planets.length > 0 &&
        characters?.map(({ url, name, gender, birth_year, homeworld }) => (
          <Character
            url={url}
            name={name}
            gender={gender}
            birth_year={birth_year}
            homeworld={homeworld}
            planets={planets}
          />
        ))}
    </div>
  );
}

export default Characters;
