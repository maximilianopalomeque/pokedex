import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "typeface-montserrat";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const PokedexAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: "none", margin: "auto" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "montserrat", fontWeight: "600" }}
              color="black"
            >
              Pokédex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PokedexAppBar;
