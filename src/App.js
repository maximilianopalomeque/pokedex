import logo from "./logo.svg";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import PokedexAppBar from "./components/PokedexAppBar";

function App() {
  return (
    <>
      <PokedexAppBar />
      <HomeScreen />;
    </>
  );
}

export default App;
