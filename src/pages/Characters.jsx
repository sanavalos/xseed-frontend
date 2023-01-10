import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";

function Characters() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const { planets } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getPlanets());
  }, []);

  const findHomeworld = (homeworld) => {
    const planet = planets.find((planet) => planet.url === homeworld);
    return planet.name;
  };

  return (
    <div>
      {characters?.map(({ url, name, gender, birth_year, homeworld }) => (
        <div key={url}>
          <h1>{name}</h1>
          <h2>{gender}</h2>
          <h2>{birth_year}</h2>
          <h2>{planets.length > 0 && findHomeworld(homeworld)}</h2>
        </div>
      ))}
    </div>
  );
}

export default Characters;
