import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
            variant="subtitle1"
            color="inherit"
            component="div"
            flexGrow={1}
            textAlign="center"
            sx={{ textTransform: "capitalize" }}
          >
            {location.pathname.slice(1)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
