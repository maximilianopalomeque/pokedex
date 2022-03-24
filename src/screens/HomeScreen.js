import { React, useState, useEffect } from "react";

import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import axios from "axios";

import PokemonCard from "../components/PokemonCard";

const HomeScreen = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");

  const getAllPokemonURL = async () => {
    const response = await axios(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
    );
    return response.data.results;
  };

  const getAllPokemonData = async () => {
    const urls = await getAllPokemonURL();
    const allData = [];

    for (let i = 0; i < urls.length; i++) {
      const response = await axios(urls[i]);
      allData.push(response.data);
    }
    setAllPokemonData(allData);
  };

  useEffect(() => {
    getAllPokemonData();
  }, []);

  return (
    <>
      {console.log("pokemondata", allPokemonData)}
      <Container>
        <Grid container xl={12} s={12} mt={2} justifyContent="center" mb={2}>
          <Grid item>
            <Box>
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                onChange={(event) => {
                  setSearchFilter(event.target.value);
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container xl={12} justifyContent="center">
          {allPokemonData
            .filter((val) => {
              if (searchFilter === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchFilter.toLowerCase())
              ) {
                return val;
              }
            })
            .map((pokemon) => {
              return (
                <Grid item md={12} mt={0.2}>
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default HomeScreen;
