import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";

function Characters() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div>
      {characters.map(({ url, name, gender, birth_year, homeworld }) => (
        <div key={url}>
          <h1>{name}</h1>
          <h2>{gender}</h2>
          <h2>{birth_year}</h2>
          <h2>{homeworld}</h2>
        </div>
      ))}
    </div>
  );
}

export default Characters;
