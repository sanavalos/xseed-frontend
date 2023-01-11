import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFavorite } from "../actions/favoritesActions";
import Character from "../components/Character";

function Favorites() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { filteredFavorites } = useSelector((state) => state.favorites);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={() => dispatch(searchFavorite(search.toLowerCase()))}
      />
      {filteredFavorites?.map(({ url, name, gender, birth_year, planet }) => (
        <Character
          url={url}
          name={name}
          gender={gender}
          birth_year={birth_year}
          planet={planet}
        />
      ))}
    </div>
  );
}

export default Favorites;
