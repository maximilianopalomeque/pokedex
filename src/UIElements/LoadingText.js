import { React } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import walkingAnimation from "../images/pokemon-walking-animation.gif";

import "animate.css";

const LoadingText = () => {
  return (
    <>
      <Container>
        <Grid container xl={12} s={12} mt={5} justifyContent="center" mb={2}>
          <Grid item>
            <h1
              className="animate__animated animate__bounce"
              style={{ color: "gray" }}
            >
              {"loading"}
            </h1>
          </Grid>
          <Grid container xl={12} s={12} mt={0} justifyContent="center" mb={2}>
            <Grid item>
              <img
                src={walkingAnimation}
                alt="pikachu running"
                width={70}
                height={40}
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LoadingText;
