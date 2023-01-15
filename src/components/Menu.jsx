import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen}>
        <MenuIcon style={{ color: "#FFFFFF", fontSize: 40 }} />
      </Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 400 },
            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        <Box paddingLeft={"20px"} paddingTop={"50px"}>
          <Button>
            <CloseIcon
              style={{ color: "#FFFFFF", fontSize: 40 }}
              onClick={handleClose}
            />
          </Button>
          <List>
            <ListItem
              sx={{
                marginTop: 6,
                marginLeft: 2,
                "&:hover": { cursor: "pointer" },
              }}
            >
              <ListItemText
                primary={
                  <Link to="/characters" style={{ textDecoration: "inherit" }}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="h4"
                      color="text.primary"
                    >
                      Characters
                    </Typography>
                  </Link>
                }
              />
            </ListItem>
            <ListItem
              sx={{
                marginTop: 1,
                marginLeft: 2,
                "&:hover": { cursor: "pointer" },
              }}
            >
              <ListItemText
                primary={
                  <Link to="/favorites" style={{ textDecoration: "inherit" }}>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="h4"
                      color="text.primary"
                    >
                      Favorites
                    </Typography>
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Menu;
