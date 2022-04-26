import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import PokedexAppBar from "./components/PokedexAppBar";

function App() {
  return (
    <>
      <PokedexAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
