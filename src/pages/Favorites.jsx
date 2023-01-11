import React from "react";
import { useSelector } from "react-redux";
import Character from "../components/Character";

function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);
  return (
    <div>
      {favorites?.map(({ url, name, gender, birth_year, planet }) => (
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
