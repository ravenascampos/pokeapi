import axios from "axios";

export const POKEMON_API_URL = "https://pokeapi.co/api/v2/";

export const IMAGE_API_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
