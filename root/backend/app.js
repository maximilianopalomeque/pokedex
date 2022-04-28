const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const CustomError = require("./models/CustomError");

const pokemonRoutes = require("./routes/pokemon-routes");
const db_url =
  "mongodb+srv://maximilianopalomeque:PEQbdWJWk4mNxMXQ@cluster0.jd4it.mongodb.net/pokedex150?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.use(
  cors({
    allowedHeaders: ["Content-Type"],
    origin: "http://localhost:3000",
    preflightContinue: true,
  })
);

app.use("/", pokemonRoutes);

app.use((error, req, res, next) => {
  console.log("error handling function");
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error ocurred" });
});

mongoose
  .connect(db_url)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(5000);
