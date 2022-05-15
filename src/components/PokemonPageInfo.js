import { React } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import PokemonTab from "../components/PokemonTab";
import TypeBadge from "../UIElements/TypeBadge";
import "./pokemonpageinfo.css";

const PokemonPageInfo = ({ pokemon }) => {
  return (
    <>
      <Grid
        container
        className={`${pokemon.types[0].type.name} page-background`}
      >
        <Grid item container mt={10} className="page-header-container">
          <Grid item xs={12} align="center">
            <Avatar
              alt="Pokemon image"
              src={pokemon.image}
              variant="square"
              sx={{ width: 110, height: 110 }}
            />
          </Grid>
          <Grid item xs={12} mt={-3}>
            <Typography className="pokemon-title">{pokemon.name}</Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            mt={-4}
            mb={0}
            justifyContent="center"
            spacing={1}
          >
            {pokemon.types.map((t) => {
              return (
                <Grid item>
                  <TypeBadge type={t.type.name} />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            item
            xs={12}
            ml={1}
            mr={1}
            className="pokemon-description-container"
          >
            <Typography className="pokemon-description">
              {pokemon.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={45}>
        <Grid item xs={12}>
          <PokemonTab pokemon={pokemon} />
        </Grid>
      </Grid>
    </>
  );
};

export default PokemonPageInfo;
