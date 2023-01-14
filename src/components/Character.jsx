import React from "react";
import { setFavorite } from "../actions/favoritesActions";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Divider from "@mui/material/Divider";
import { grey, lightGreen } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";

function Character({
  url,
  name,
  gender,
  birth_year,
  homeworld,
  planets,
  planet,
}) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  const findHomeworld = (homeworld) => {
    const name = planets?.find((planet) => planet.url === homeworld).name;
    let isFavorite = !!favorites.find((favorite) => favorite.url === url);
    return { name: name, favorite: isFavorite };
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        paddingBottom: 3,
        marginTop: {
          xs: 0,
          sm: 1,
        },
        marginLeft: 0,
        maxHeight: 76,
        borderBottom: 1,
        borderColor: "#463B5E",
      }}
    >
      <Box>
        <Typography
          variant="body1"
          fontWeight={600}
          marginBottom={1}
          textAlign={"left"}
        >
          {name}
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems={"center"}>
          <Typography variant="body1" color={grey[600]} fontWeight={400}>
            {gender?.startsWith("n/a")
              ? gender
              : `${gender?.charAt(0).toUpperCase()}${gender?.slice(1)}`}
          </Typography>
          <Divider orientation="vertical" flexItem color={grey[600]} />
          <Typography variant="body1" color={grey[600]} fontWeight={400}>
            {birth_year}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          textAlign={"center"}
          borderRadius={2.5}
          paddingX={1.5}
          paddingY={0.5}
          marginY={0.5}
          sx={{
            background: grey[800],
            maxWidth: "fit-content",
          }}
        >
          <FmdGoodOutlinedIcon sx={{ color: "grey[50]" }} />
          <Typography
            marginLeft={0}
            variant="body2"
            color={"white"}
            fontWeight={600}
            noWrap
          >
            {planet ?? findHomeworld(homeworld).name}
          </Typography>
        </Stack>
      </Box>
      <Box>
        {!!findHomeworld(homeworld).favorite ? (
          <Tooltip title="Unfavorite" placement="top" arrow>
            <FavoriteIcon
              style={{ color: lightGreen[300] }}
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() =>
                dispatch(
                  setFavorite({
                    url,
                    name,
                    gender,
                    birth_year,
                    planet: planet,
                  })
                )
              }
            />
          </Tooltip>
        ) : (
          <Tooltip title="Favorite" placement="top" arrow>
            <FavoriteBorderIcon
              style={{ color: lightGreen[300] }}
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() =>
                dispatch(
                  setFavorite({
                    url,
                    name,
                    gender,
                    birth_year,
                    planet: findHomeworld(homeworld).name,
                  })
                )
              }
            />
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}

export default Character;
