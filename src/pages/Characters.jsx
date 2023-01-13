import React, { useEffect, useState, lazy, Suspense } from "react";
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
import LoadingCharacters from "../components/LoadingCharacters";
import Button from "@mui/material/Button";

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
  const { planets } = useSelector((state) => state.planets);

  const persistedState = store.getState();
  const { characters } = persistedState;
  let arrayChar = characters?.characters;

  useEffect(() => {
    if (arrayChar !== undefined && !arrayChar?.length > 0) {
      dispatch(getCharacters());
      dispatch(getPlanets());
    }
  }, []);

  useEffect(() => {
    if (arrayChar !== undefined && !arrayChar?.length > 0) {
      dispatch(getCharacters());
      dispatch(getPlanets());
    }
  }, [arrayChar]);

  return (
    <Background>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {planets?.length > 0 &&
            !allCharacters &&
            renderCharacters
              ?.slice(0, 9)
              .map(({ url, name, gender, birth_year, homeworld }) => (
                <Grid item xs={12} sm={6} md={4} key={url}>
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
              ))}
          {planets?.length > 0 &&
            allCharacters &&
            renderCharacters?.map(
              ({ url, name, gender, birth_year, homeworld }) => (
                <Grid item xs={12} sm={6} md={4} key={url}>
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
          {!allCharacters && planets?.length > 0 && renderCharacters && (
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
          {arrayChar.length > 0 && !renderCharacters?.length > 0 && (
            <LoadingCharacters
              title="Oops! Something went wrong"
              caption="No characters found"
            />
          )}
          {!arrayChar.length > 0 && !renderCharacters?.length > 0 && (
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
