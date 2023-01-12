import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import store from "../store";
import LoadingCharacter from "../components/LoadingCharacter";
const Character = React.lazy(() => import("../components/Character"));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#17141F",
  padding: theme.spacing(2),
  textAlign: "center",
}));

const Background = styled(Box)(() => ({
  backgroundColor: "#17141F",
  minHeight: "100vh",
}));

function Characters() {
  const dispatch = useDispatch();
  const renderCharacters = useSelector((state) => state.characters.characters);
  const { planets } = useSelector((state) => state.planets);

  const persistedState = store.getState();
  const { characters } = persistedState;
  let arrayChar = characters?.characters;

  useEffect(() => {
    if (arrayChar !== undefined) {
      !arrayChar?.length && dispatch(getCharacters());
      !arrayChar?.length && dispatch(getPlanets());
    }
  }, []);

  useEffect(() => {
    if (arrayChar !== undefined) {
      !arrayChar.length && dispatch(getCharacters());
      !arrayChar.length && dispatch(getPlanets());
    }
  }, [arrayChar]);

  return (
    <Background>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {planets?.length &&
            renderCharacters?.map(
              ({ url, name, gender, birth_year, homeworld }) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Item>
                    <Suspense fallback={<LoadingCharacter />}>
                      <Character
                        url={url}
                        name={name}
                        gender={gender}
                        birth_year={birth_year}
                        homeworld={homeworld}
                        planets={planets}
                      />
                    </Suspense>
                  </Item>
                </Grid>
              )
            )}
          {!renderCharacters?.length && (
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
