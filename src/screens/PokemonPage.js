import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import PokemonPageInfo from "../components/PokemonPageInfo";
import LoadingText from "../UIElements/LoadingText";

const PokemonPage = () => {
  const { dexNumber } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async () => {
    let response;
    try {
      response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/pokemon/${dexNumber}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoaded(true);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <>{isLoaded ? <PokemonPageInfo pokemon={pokemon} /> : <LoadingText />}</>
  );
};

export default PokemonPage;
