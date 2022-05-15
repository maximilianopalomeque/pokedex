import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import PokemonPage from "./screens/PokemonPage";
import PokedexAppBar from "./components/PokedexAppBar";

import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Router>
          <PokedexAppBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/pokemon/:dexNumber" element={<PokemonPage />} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </>
  );
}

export default App;
