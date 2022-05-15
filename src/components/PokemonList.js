import { React, useState } from "react";
import { Link } from "react-router-dom";

import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PokemonCard from "./PokemonCard";
import SearchIcon from "@mui/icons-material/Search";

const PokemonList = ({ allPokemonData }) => {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
      <Grid container mt={-3}>
        <Grid
          item
          container
          xl={12}
          s={12}
          mt={2}
          justifyContent="center"
          mb={3}
        >
          <Grid item pt={2.5} mr={1}>
            <SearchIcon sx={{ color: "#989898" }} />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              onChange={(event) => {
                setSearchFilter(event.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Container className="container">
        <Grid item container spacing={1} justifyContent="center">
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
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link
                    to={`/pokemon/${pokemon.dexNumber}`}
                    style={{ textDecoration: "none" }}
                  >
                    <PokemonCard pokemon={pokemon} />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default PokemonList;
