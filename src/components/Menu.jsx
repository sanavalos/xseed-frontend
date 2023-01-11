import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <div onClick={handleOpen}>
        <MenuIcon style={{ color: "#000000", fontSize: 40 }} />
      </div>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
          },
        }}
      >
        <Box paddingLeft={"20px"} paddingTop={"50px"}>
          <CloseIcon
            style={{ color: "#000000", fontSize: 40 }}
            onClick={handleClose}
          />

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
                  <Link to="/characters">
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
                  <Link to="/favorites">
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
