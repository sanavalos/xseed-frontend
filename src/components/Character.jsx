import React from "react";
import { setFavorite } from "../actions/favoritesActions";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Divider from "@mui/material/Divider";
import { grey, lightGreen } from "@mui/material/colors";

function Character({ url, name, gender, birth_year, homeworld, planets }) {
  const dispatch = useDispatch();
  const findHomeworld = (homeworld) => {
    const { name } = planets.find((planet) => planet.url === homeworld);
    return name;
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
        marginTop: 4,
        bgcolor: "background.paper",
        maxWidth: 350,
        maxHeight: 76,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Box>
        <Typography variant="body1" fontWeight={600} marginBottom={1}>
          {name}
        </Typography>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Typography variant="body1" color={grey[600]} fontWeight={400}>
            {gender}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1" color={grey[600]} fontWeight={400}>
            {birth_year}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          borderRadius={1}
          paddingX={0.5}
          paddingY={0.1}
          marginY={0.5}
          sx={{
            background: grey[500],
            maxWidth: "fit-content",
          }}
        >
          <FmdGoodOutlinedIcon sx={{ color: grey[50] }} />
          <Typography
            marginLeft={0}
            variant="body2"
            color={"white"}
            fontWeight={600}
            width={100}
          >
            {findHomeworld(homeworld)}
          </Typography>
        </Stack>
      </Box>
      <Box>
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
                planet: findHomeworld(homeworld),
              })
            )
          }
        />
      </Box>
    </Box>
  );
}

export default Character;
