import React from "react";
import Image from "mui-image";
import bg from "../assets/home_bg.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Background = styled(Box)(() => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

function Home() {
  return (
    <Background>
      <Box
        sx={{
          fontSize: "0.875rem",
          fontWeight: "700",
          position: "absolute",
          left: "30%",
          right: "10%",
          zIndex: "tooltip",
          textTransform: "uppercase",
        }}
      >
        <Link to={"/characters"}>
          <Typography
            sx={{
              color: "white",
              marginBottom: 5,
            }}
            variant="h2"
          >
            Characters
          </Typography>
        </Link>
        <Link to={"/favorites"}>
          <Typography
            sx={{
              color: "white",
              margin: 5,
            }}
            align="center"
            variant="h2"
          >
            Favorites
          </Typography>
        </Link>
      </Box>
      <Image
        src={bg}
        width="100vw"
        height="100vh"
        bgColor="#17141F"
        duration={2000}
      />
    </Background>
  );
}

export default Home;
