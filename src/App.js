import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
