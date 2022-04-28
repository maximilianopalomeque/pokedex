const mongoose = require("mongoose");
const CustomError = require("../models/CustomError");

const Pokemon = require("../utils/getDataFromApi/pokemonSchema");

const getPokemonData = async (req, res, next) => {
  let pokemonData;
  try {
    pokemonData = await Pokemon.find();
  } catch (error) {
    return next(new CustomError("could not get data from database", 500));
  }

  // pokemonData = pokemonData.map((p) => p.toObject());
  res.json(pokemonData);
};

exports.getPokemonData = getPokemonData;
