import { React, useState, useEffect } from "react";

import axios from "axios";

import PokemonList from "../components/PokemonList";
import LoadingText from "../UIElements/LoadingText";

const HomeScreen = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPokemonData = async () => {
    let response;
    try {
      response = await axios("http://localhost:5000/");
    } catch (error) {
      console.log("could not get pokemon data");
      return;
    }

    setAllPokemonData(response.data);
    setIsLoaded(true);
  };

  useEffect(() => {
    getPokemonData();
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
