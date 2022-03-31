import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import PokemonInfo from "./PokemonInfo";

import Grid from "@mui/material/Grid";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar
            alt="Pokemon image"
            src={pokemon.sprite}
            variant="square"
            sx={{ width: 50, height: 50 }}
          />
          <Typography style={{ fontWeight: "bold" }} mt={1.5} ml={2} mr={1}>
            {pokemon.id}
          </Typography>
          <Typography mt={1.5} style={{ textTransform: "capitalize" }}>
            {pokemon.name}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid item xl={12} mb={2}>
            <PokemonInfo pokemon={pokemon} />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PokemonCard;
