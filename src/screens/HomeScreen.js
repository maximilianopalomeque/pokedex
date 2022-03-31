import { React, useState, useEffect } from "react";

import axios from "axios";

import PokemonList from "../components/PokemonList";

const HomeScreen = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);

  const getAllPokemonURL = async () => {
    const response = await axios(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
    );
    return response.data.results;
  };

  const getDescription = async (url) => {
    const response = await axios(url);
    return response.data.flavor_text_entries[9].flavor_text;
  };

  const getAllPokemonData = async () => {
    const urls = await getAllPokemonURL();
    const allData = [];

    for (let i = 0; i < urls.length; i++) {
      const response = await axios(urls[i]);
      const data = response.data;
      const description = await getDescription(data.species.url);
      const pokemon = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        description: description,
        types: data.types,
        abilities: data.abilities,
        stats: data.stats,
      };
      allData.push(pokemon);
    }
    setAllPokemonData(allData);
  };

  useEffect(() => {
    getAllPokemonData();
  }, []);

  return <PokemonList allPokemonData={allPokemonData} />;
};

export default HomeScreen;
