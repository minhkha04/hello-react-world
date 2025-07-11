import React from 'react';
import {Link} from "react-router-dom";

const ItemPokemon = ({pokemon, index}) => {
    const {name, image, type, attack, defense} = pokemon;
    return (
        <div
            key={name}
            className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 animate-fadeIn"
            style={{animationDelay: `${index * 0.1}s`}}
        >
            {/* Glow effect */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            {/* Card content */}
            <div className="relative z-10">
                {/* Pokemon Image */}
                <div className="relative mb-4">
                    <div
                        className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <img
                            src={image}
                            alt={name}
                            className="w-28 h-28 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    {/* Sparkle effects */}
                    <div className="absolute top-2 right-2 text-yellow-300 animate-bounce">✨</div>
                    <div className="absolute bottom-2 left-2 text-pink-300 animate-pulse">⭐</div>
                </div>

                {/* Pokemon Name */}
                <h3 className="text-2xl font-bold text-center mb-3 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    {name}
                </h3>

                {/* Type Badge */}
                <div className="text-center mb-4">
                    <span
                        className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                            {type}
                    </span>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                    {/* Attack Stat */}
                    <div className="flex items-center justify-between">
                        <span className="text-red-300 font-semibold flex items-center">
                            ⚔️ Attack
                         </span>
                        <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-1000"
                                    style={{width: `${Math.min((attack / 150) * 100, 100)}%`}}
                                ></div>
                            </div>
                            <span className="text-white font-bold text-sm">{attack}</span>
                        </div>
                    </div>

                    {/* Defense Stat */}
                    <div className="flex items-center justify-between">
                        <span className="text-blue-300 font-semibold flex items-center">
                                                🛡️ Defense
                        </span>
                        <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                                    style={{width: `${Math.min((defense / 150) * 100, 100)}%`}}
                                ></div>
                            </div>
                            <span className="text-white font-bold text-sm">{defense}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    to={`poke-detail/${name}`}
                    className="block w-full mt-6 py-3 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white font-bold text-center rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 border border-white/20 backdrop-blur-sm relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Details</span>
                    </span>
                </Link>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default ItemPokemon;