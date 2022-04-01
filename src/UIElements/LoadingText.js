import { React } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
        </Grid>
      </Container>
    </>
  );
};

export default LoadingText;
