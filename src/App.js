import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#A2D1B1",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      default: "#17141F",
      paper: "#17141F",
    },
  },
  typography: {
    fontFamily: ["Urbanist", "sans-serif"].join(","),
    h4: {
      letterSpacing: "2px",
    },
    h5: {
      letterSpacing: "2px",
    },
    h6: {
      letterSpacing: "3px",
    },
    body1: {
      letterSpacing: "1px",
    },
    body2: {
      letterSpacing: "1px",
    },
    subtitle1: {
      letterSpacing: "1px",
    },
    caption: {
      letterSpacing: "0.5px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
