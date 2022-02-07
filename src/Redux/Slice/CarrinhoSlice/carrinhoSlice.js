import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
  name: "Carrinho",
  initialState: {
    pokemon: [],
  },
  reducers: {
    getPokemon: (state, action) => {
      let pokemonName = action.payload.name;
      let isInside = state.pokemon
        .map((poke) => poke.name)
        .includes(pokemonName);
      if (!isInside) {
        state.pokemon = [
          ...state.pokemon,
          {
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
            quantity: action.payload.quantity,
          },
        ];
      } else {
        let newList = state.pokemon
          .map((poke) => {
            if (poke.name === pokemonName) {
              return {
                name: poke.name,
                image: poke.image,
                price: poke.price,
                quantity: poke.quantity + action.payload.quantity,
              };
            } else {
              return poke;
            }
          })
          .filter((poke) => poke.quantity > 0);
        state.pokemon = newList;
      }
    },
  },
});

export const { getPokemon } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
