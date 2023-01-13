import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#17141F",
  padding: theme.spacing(2),
  textAlign: "center",
}));

function LoadingCharacters({ title, caption }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      textAlign="center"
      alignItems="center"
      marginTop={10}
    >
      <Item>
        <Typography
          sx={{
            color: "white",
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
          align="center"
          variant="caption"
        >
          {caption}
        </Typography>
      </Item>
    </Grid>
  );
}

export default LoadingCharacters;
