import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFavorite } from "../actions/favoritesActions";
import Character from "../components/Character";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";

function Favorites() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { filteredFavorites } = useSelector((state) => state.favorites);

  const handleSubmit = (e) => {
    e.key === "Enter" && dispatch(searchFavorite(search.toLowerCase()));
  };

  useEffect(() => {
    search === "" && dispatch(searchFavorite(""));
  }, [search]);

  return (
    <div>
      <Typography marginBottom={1.5}>Search a favorite</Typography>
      <OutlinedInput
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
        placeholder="Character name..."
        sx={{ minWidth: "400px", borderRadius: 5 }}
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
