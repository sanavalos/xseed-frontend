import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";
import { Link } from "react-router-dom";
import Character from "../components/Character";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

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
      <Navbar />
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {planets.length > 0 &&
            characters?.map(({ url, name, gender, birth_year, homeworld }) => (
              <Grid item xs={12} sm={6} md={4}>
                <Item>
                  <Character
                    url={url}
                    name={name}
                    gender={gender}
                    birth_year={birth_year}
                    homeworld={homeworld}
                    planets={planets}
                  />
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Characters;
