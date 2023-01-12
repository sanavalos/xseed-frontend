import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";
import Character from "../components/Character";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#17141F",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Background = styled(Box)(() => ({
  backgroundColor: "#17141F",
  minHeight: "100vh",
}));

function Characters() {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const { planets } = useSelector((state) => state.planets);

  const localStorageData = window.localStorage.getItem("persist:root");

  useEffect(() => {
    !localStorageData && dispatch(getCharacters());
    !localStorageData && dispatch(getPlanets());
  }, []);

  return (
    <Background>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {planets?.length &&
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
          {characters?.length === 0 && (
            <Grid
              container
              spacing={0}
              direction="column"
              textAlign="center"
              alignItems="center"
              marginTop={10}
            >
              <Item>
                <Typography
                  sx={{
                    color: "white",
                  }}
                  variant="subtitle1"
                >
                  Oops! Something went wrong
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                  }}
                  align="center"
                  variant="caption"
                >
                  No characters found
                </Typography>
              </Item>
            </Grid>
          )}
        </Grid>
      </Box>
    </Background>
  );
}

export default Characters;
