import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

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
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
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
