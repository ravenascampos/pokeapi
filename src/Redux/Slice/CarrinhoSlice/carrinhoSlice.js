import { createSlice } from "@reduxjs/toolkit";

export const carrinhoSlice = createSlice({
    name: "Carrinho",
    initialState: {
        pokemon: [
            
        ]
    },
    reducers: {
        getPokemon: (state, action) =>{
            state.pokemon = [...state.pokemon, {
                name: action.payload.name,
                image: action.payload.image,
                price: action.payload.price
            }]
        }
    }
})

export const {getPokemon} = carrinhoSlice.actions

export default carrinhoSlice.reducer