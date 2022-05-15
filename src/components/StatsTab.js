import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import "./statstab.css";

const Statstab = ({ stats }) => {
  const normalise = (value) => ((value - 1) * 100) / (180 - 1);

  return (
    <>
      <Grid container xs={12} spacing={1}>
        {stats.map((s) => {
          return (
            <>
              <Grid item xs={4}>
                <Typography className="stats-tab-info-title">
                  {s.stat.name}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography className="stats-tab-info">
                  {s.base_stat}
                </Typography>
              </Grid>
              <Grid item xs={6} md={6} mt={1}>
                <LinearProgress
                  variant="determinate"
                  value={normalise(s.base_stat)}
                />
              </Grid>
            </>
          );
        })}
      </Grid>

      {/* <Grid item container xs={4}>
          {stats.map((s) => {
            return (
              <Grid xs={12} mb={1}>
                <Typography className="about-tab-info-title">
                  {s.stat.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid item container xs={3}>
          {stats.map((s) => {
            return (
              <Grid xs={12} mb={1}>
                <Typography className="about-tab-info-title">
                  {s.base_stat}
                </Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid item container xs={5}>
          <Grid item xs={12}>
            barritaaaaaaaa
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Statstab;
