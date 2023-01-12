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
          left: {
            xs: "5%",
            sm: "20%",
            md: "30%",
            lg: "35%",
          },
          zIndex: "tooltip",
          textTransform: "uppercase",
        }}
      >
        {["characters", "favorites"].map((page) => (
          <Link to={`/${page}`}>
            <Typography
              sx={{
                color: "white",
                marginBottom: 5,
                fontSize: {
                  xs: "12vw",
                  sm: "8vw",
                  md: "6vw",
                  lg: "4vw",
                },
              }}
              align="center"
            >
              {page}
            </Typography>
          </Link>
        ))}
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
