import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Divider from "@mui/material/Divider";
import { grey, lightGreen } from "@mui/material/colors";

function LoadingCharacter() {
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
        marginLeft: 0,
        bgcolor: "background.paper",
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
          Name
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems={"center"}>
          <Typography variant="body1" color={grey[600]} fontWeight={400}>
            Gender
          </Typography>
          <Divider orientation="vertical" flexItem color={grey[600]} />
          <Typography variant="body1" color={grey[600]} fontWeight={400}>
            Birth
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
            background: grey[500],
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
            Planet
          </Typography>
        </Stack>
      </Box>
      <Box>
        <FavoriteBorderIcon style={{ color: lightGreen[300] }} />
      </Box>
    </Box>
  );
}

export default LoadingCharacter;
