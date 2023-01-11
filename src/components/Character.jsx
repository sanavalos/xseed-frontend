import React from "react";
import { setFavorite } from "../actions/favoritesActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";

function Character({ url, name, gender, birth_year, homeworld, planets }) {
  const dispatch = useDispatch();
  const findHomeworld = (homeworld) => {
    const { name } = planets.find((planet) => planet.url === homeworld);
    return name;
  };
  return (
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
  );
}

export default Character;
