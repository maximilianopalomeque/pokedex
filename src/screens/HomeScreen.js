import { React, useState, useEffect } from "react";

import axios from "axios";

import PokemonList from "../components/PokemonList";
import LoadingText from "../UIElements/LoadingText";

const HomeScreen = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getAllPokemonData = async () => {
    try {
      const response = await axios(process.env.REACT_APP_BACKEND_URL);
      setAllPokemonData(response.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoaded(true);
  };

  useEffect(() => {
    getAllPokemonData();
  }, []);

  return (
    <>
      {isLoaded ? (
        <PokemonList allPokemonData={allPokemonData} />
      ) : (
        <LoadingText />
      )}
    </>
  );
};

export default HomeScreen;
