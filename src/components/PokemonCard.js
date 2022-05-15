import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import "./pokemoncard.css";
import { CardActionArea } from "@mui/material";

const PokemonCard = ({ pokemon }) => {
  const type = pokemon.types[0].type.name;
  return (
    <CardActionArea>
      <Grid container className={`pokemon-card ${type} pokemon-info`}>
        <Grid item p={1}>
          <Avatar
            alt="Pokemon image"
            src={pokemon.image}
            variant="square"
            sx={{ width: 60, height: 60 }}
            className="avatar"
          />
        </Grid>
        <Grid item ml={0.5}>
          <Typography className="pokemon-name">{pokemon.name}</Typography>
          <Typography mt={-1.5} ml={0.1} className="pokemon-number">
            {pokemon.dexNumber}
          </Typography>
        </Grid>
      </Grid>
    </CardActionArea>
  );
};

export default PokemonCard;
