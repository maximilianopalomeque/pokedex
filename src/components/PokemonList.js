import { React, useState } from "react";

import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ allPokemonData }) => {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
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
                  <PokemonCard pokemon={pokemon} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default PokemonList;
