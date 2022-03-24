import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LinearProgress from "@mui/material/LinearProgress";

const PokemonInfo = ({ pokemon }) => {
  const [description, setDescription] = useState("");

  const getDescription = async () => {
    const response = await axios(pokemon.species.url)
      .then((response) =>
        setDescription(response.data.flavor_text_entries[9].flavor_text)
      )
      .catch((err) => console.log(err));
  };

  const pokemonTypes = pokemon.types;
  const abilities = pokemon.abilities;
  const stats = pokemon.stats;

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xl={4} md={4} xs={12} textAlign="center">
          <Grid item>
            <img src={pokemon.sprites.front_default} />
          </Grid>

          <Grid item>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xl={4}
          md={4}
          xs={12}
          textAlign="center"
          justifyContent="center"
        >
          <Typography mt={0.5} variant="h5" style={{ fontWeight: "bold" }}>
            Types
          </Typography>
          {pokemonTypes.map((type) => {
            return <Typography>{type.type.name}</Typography>;
          })}
          <Typography mt={2} variant="h5" style={{ fontWeight: "bold" }}>
            Abilities
          </Typography>
          {abilities.map((ability) => {
            return <Typography>{ability.ability.name}</Typography>;
          })}
        </Grid>

        <Grid item xl={4} md={4} xs={12} textAlign="center">
          <Grid item>
            <Typography mt={0.5} variant="h5" style={{ fontWeight: "bold" }}>
              {"Base stats"}
            </Typography>
          </Grid>

          <Grid
            item
            xl={12}
            md={12}
            xs={12}
            container
            justifyContent="center"
            textAlign="center"
            spacing={1}
          >
            {stats.map((stat) => {
              return (
                <>
                  <Grid item md={4}>
                    <Typography>{stat.stat.name}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>{stat.base_stat}</Typography>
                  </Grid>
                  <Grid item md={4} mt={1}>
                    <LinearProgress
                      variant="determinate"
                      value={stat.base_stat}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PokemonInfo;
