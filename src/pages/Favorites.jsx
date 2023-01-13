import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFavorite } from "../actions/favoritesActions";
import Character from "../components/Character";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";

const Background = styled(Box)(() => ({
  backgroundColor: "#17141F",
  minHeight: "100vh",
  padding: 10,
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

function Favorites() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { filteredFavorites } = useSelector((state) => state.favorites);

  const handleSubmit = (e) => {
    e.key === "Enter" && search !== "" && dispatch(searchFavorite(search));
  };

  useEffect(() => {
    search === "" && dispatch(searchFavorite(""));
  }, [search]);

  return (
    <Background>
      <Navbar />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{ sm: 2 }}
        sx={{
          alignItems: {
            sm: "center",
          },
          justifyContent: {
            sm: "center",
          },
          marginBottom: {
            sm: 5,
          },
        }}
      >
        <Typography
          sx={{
            marginTop: {
              xs: 3,
              sm: 0,
            },
            paddingLeft: {
              xs: 1,
            },
            paddingBottom: {
              xs: 1,
            },
            color: "white",
          }}
        >
          Search a favorite
        </Typography>
        <OutlinedInput
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleSubmit(e)}
          placeholder="Character name..."
          disabled={!filteredFavorites.length}
          sx={{
            width: {
              xs: "100%",
              sm: "500px",
            },
            borderRadius: 5,
          }}
        />
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {filteredFavorites?.map(
            ({ url, name, gender, birth_year, planet }) => (
              <Grid item xs={12} sm={6} md={4} key={url}>
                <Item>
                  <Character
                    url={url}
                    name={name}
                    gender={gender}
                    birth_year={birth_year}
                    planet={planet}
                  />
                </Item>
              </Grid>
            )
          )}
        </Grid>
        {!filteredFavorites.length && (
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
                You must not be a real fan
              </Typography>
              <Typography
                sx={{
                  color: "white",
                }}
                align="center"
                variant="caption"
              >
                No favorites found
              </Typography>
            </Item>
          </Grid>
        )}
      </Box>
    </Background>
  );
}

export default Favorites;
