import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";

function Navbar() {
  const location = useLocation();
  return (
    <Box flexGrow={1}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          color: "black",
        }}
      >
        <Toolbar>
          <Menu />
          <Typography
            variant="h5"
            component="div"
            flexGrow={1}
            textAlign="center"
            color="white"
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            {location.pathname.slice(1)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
