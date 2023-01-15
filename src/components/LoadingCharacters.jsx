import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

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
