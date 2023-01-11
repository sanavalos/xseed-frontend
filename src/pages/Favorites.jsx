import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../actions/favoritesActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Favorites() {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favorites);
  return (
    <div>
      {favorites?.map(({ url, name, gender, birth_year, planet }) => (
        <div key={url}>
          <h1>{name}</h1>
          <h2>{gender}</h2>
          <h2>{birth_year}</h2>
          <h2>{planet}</h2>
          <FavoriteBorderIcon
            sx={{ "&:hover": { color: "red", cursor: "pointer" } }}
            onClick={() =>
              dispatch(
                setFavorite({
                  url,
                  name,
                  gender,
                  birth_year,
                  planet,
                })
              )
            }
          />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
