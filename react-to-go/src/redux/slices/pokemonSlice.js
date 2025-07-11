import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Pikachu",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        type: "Electric",
        damage: 55,
        defense: 40,
        attack: 90
    },
    {
        name: "Charizard",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        type: "Fire/Flying",
        damage: 84,
        defense: 78,
        attack: 100
    },
    {
        name: "Bulbasaur",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        type: "Grass/Poison",
        damage: 49,
        defense: 49,
        attack: 65
    },
    {
        name: "Squirtle",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        type: "Water",
        damage: 48,
        defense: 65,
        attack: 50
    },
    {
        name: "Gengar",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
        type: "Ghost/Poison",
        damage: 65,
        defense: 60,
        attack: 130
    },
    {
        name: "Snorlax",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
        type: "Normal",
        damage: 110,
        defense: 65,
        attack: 65
    },
    {
        name: "Lucario",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
        type: "Fighting/Steel",
        damage: 110,
        defense: 70,
        attack: 115
    },
    {
        name: "Eevee",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
        type: "Normal",
        damage: 55,
        defense: 50,
        attack: 65
    },
    {
        name: "Dragonite",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        type: "Dragon/Flying",
        damage: 134,
        defense: 95,
        attack: 100
    },
    {
        name: "Mewtwo",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        type: "Psychic",
        damage: 110,
        defense: 90,
        attack: 154
    }
]

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {}
})

export default pokemonSlice.reducer;
