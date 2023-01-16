import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions/charactersActions";
import { getPlanets } from "../actions/planetsActions";
import LoadingCharacter from "../components/LoadingCharacter";
import LoadingCharacters from "../components/LoadingCharacters";
import Navbar from "../components/Navbar";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import store from "../store";

const Character = lazy(() => import("../components/Character"));

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
  const [allCharacters, setAllCharacters] = useState(false);
  const renderCharacters = useSelector((state) => state.characters.characters);
  const allPlanets = useSelector((state) => state.planets.planets);
  const errorCharacters = useSelector((state) => state.characters.error);
  const errorPlanets = useSelector((state) => state.planets.error);

  const persistedState = store.getState();
  const { characters } = persistedState;
  const { planets } = persistedState;
  let arrayChar = characters?.characters;
  let arrayPlanets = planets?.planets;

  useEffect(() => {
    if (arrayChar !== undefined && !arrayChar?.length > 0) {
      dispatch(getCharacters());
    }
    if (arrayPlanets !== undefined && !arrayPlanets?.length > 0) {
      dispatch(getPlanets());
    }
  }, []);

  useEffect(() => {
    if (arrayChar !== undefined && !arrayChar?.length > 0) {
      dispatch(getCharacters());
    }
    if (arrayPlanets !== undefined && !arrayPlanets?.length > 0) {
      dispatch(getPlanets());
    }
  }, [arrayChar, arrayPlanets]);

  return (
    <Background>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {allPlanets?.length > 0 &&
            !allCharacters &&
            renderCharacters
              ?.slice(0, 9)
              .map(({ url, name, gender, birth_year, homeworld }) => (
                <Grid item xs={12} sm={6} md={4} marginBottom={0.2} key={url}>
                  <Item>
                    <Suspense fallback={<LoadingCharacter />}>
                      <Character
                        url={url}
                        name={name}
                        gender={gender}
                        birth_year={birth_year}
                        homeworld={homeworld}
                        planets={allPlanets}
                      />
                    </Suspense>
                  </Item>
                </Grid>
              ))}
          {allPlanets?.length > 0 &&
            allCharacters &&
            renderCharacters?.map(
              ({ url, name, gender, birth_year, homeworld }) => (
                <Grid item xs={12} sm={6} md={4} marginBottom={0.2} key={url}>
                  <Item>
                    <Suspense fallback={<LoadingCharacter />}>
                      <Character
                        url={url}
                        name={name}
                        gender={gender}
                        birth_year={birth_year}
                        homeworld={homeworld}
                        planets={allPlanets}
                      />
                    </Suspense>
                  </Item>
                </Grid>
              )
            )}
          {!allCharacters && allPlanets?.length > 0 && renderCharacters && (
            <Grid
              container
              direction="column"
              textAlign="center"
              alignItems="center"
              marginTop={5}
            >
              <Item>
                <Button
                  variant="contained"
                  onClick={() => setAllCharacters(true)}
                >
                  <Typography
                    sx={{
                      color: "white",
                    }}
                    variant="h6"
                  >
                    See more characters
                  </Typography>
                </Button>
              </Item>
            </Grid>
          )}
          {(allPlanets === [] || renderCharacters === []) &&
            (errorCharacters || errorPlanets) && (
              <LoadingCharacters
                title="Oops! Something went wrong"
                caption="No characters found"
              />
            )}
          {!arrayChar.length > 0 &&
            !renderCharacters?.length > 0 &&
            !errorCharacters &&
            !errorPlanets && (
              <LoadingCharacters
                title="Do. Or do not.
              There is no try."
                caption="-Yoda"
              />
            )}
        </Grid>
      </Box>
    </Background>
  );
}

export default Characters;
