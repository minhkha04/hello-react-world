import React from 'react';
import ItemPokemon from "./ItemPokemon.jsx";

const ExampleProps = () => {
    const pokemon = [
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
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4">
            <div className="container mx-auto">
                {/* Header với hiệu ứng glow */}
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse">
                        ✨ My Pokemon Collection ✨
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                {/* Grid Pokemon Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                    {pokemon.map((poke, index) => {
                        return (
                            <ItemPokemon pokemon={poke} index={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExampleProps;