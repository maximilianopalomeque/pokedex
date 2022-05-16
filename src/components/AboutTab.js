import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

import "./abouttab.css";

const AboutTab = ({ pokemon }) => {
  const femalePercentage = pokemon.genderRate;

  return (
    <>
      <Grid container spacing={1}>
        <Grid item container xs={12} className="about-tab-data-container">
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info-title">Weight</Typography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info">
              {pokemon.weight} kg
            </Typography>
          </Grid>
        </Grid>

        <Grid item container xs={12} className="about-tab-data-container">
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info-title">Height</Typography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info">
              {pokemon.height} m
            </Typography>
          </Grid>
        </Grid>

        <Grid item container xs={12} className="about-tab-data-container">
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info-title">
              {pokemon.abilities.length > 1 ? "Abilities" : "Ability"}
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info">
              {pokemon.abilities.map((a, index) => {
                return (
                  <Typography
                    component={"span"}
                    display="inline"
                    className="about-tab-info"
                  >
                    {(index ? ", " : "") + a.ability.name}
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container xs={12} className="about-tab-data-container">
          <Grid item xs={6} md={4} lg={2}>
            <Typography className="about-tab-info-title">Gender</Typography>
          </Grid>

          <Grid item xs={6} md={4} lg={2}>
            {femalePercentage != -1 ? (
              <Typography className="about-tab-info">
                <MaleIcon fontSize="small" />
                {100 - femalePercentage}% -
                <FemaleIcon fontSize="small" />
                {femalePercentage}%
              </Typography>
            ) : (
              <Typography className="about-tab-info">Genderless</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutTab;
