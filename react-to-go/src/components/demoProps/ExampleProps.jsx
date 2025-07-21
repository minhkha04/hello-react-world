import React from 'react';
import ItemPokemon from "./ItemPokemon.jsx";
import {useSelector} from "react-redux";

const ExampleProps = () => {
    const pokemon = useSelector(state => state.pokemonSlice);
    return (
        <div className={'outline outline-1 outline-red-500'}>
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
    );
};

export default ExampleProps;