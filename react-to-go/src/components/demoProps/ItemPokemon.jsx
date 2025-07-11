import React from 'react';
import {Link} from "react-router-dom";

const ItemPokemon = ({pokemon, index}) => {
    const {name, image, type, attack, defense} = pokemon;
    return (
        <div
            key={name}
            className="group relative bg-gray-900 border border-cyan-500 rounded-lg p-6 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/50 animate-fadeIn overflow-hidden"
            style={{animationDelay: `${index * 0.1}s`}}
        >
            {/* Galaxy glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card content */}
            <div className="relative z-10">
                {/* Pokemon Image */}
                <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                        <img
                            src={image}
                            alt={name}
                            className="w-28 h-28 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    {/* Galaxy sparkle effects */}
                    <div className="absolute top-2 right-2 text-cyan-400 animate-bounce">⭐</div>
                    <div className="absolute bottom-2 left-2 text-purple-400 animate-pulse">✨</div>
                </div>

                {/* Pokemon Name */}
                <h3 className="text-2xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase tracking-wide">
                    {name}
                </h3>

                {/* Type Badge */}
                <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg border border-cyan-400/50 uppercase tracking-wide">
                        {type}
                    </span>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                    {/* Attack Stat */}
                    <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-semibold flex items-center uppercase tracking-wide">
                            ⚔️ Attack
                         </span>
                        <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-gray-800 border border-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-1000 shadow-lg"
                                    style={{width: `${Math.min((attack / 150) * 100, 100)}%`}}
                                ></div>
                            </div>
                            <span className="text-cyan-400 font-bold text-sm">{attack}</span>
                        </div>
                    </div>

                    {/* Defense Stat */}
                    <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-semibold flex items-center uppercase tracking-wide">
                            🛡️ Defense
                        </span>
                        <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-gray-800 border border-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 shadow-lg"
                                    style={{width: `${Math.min((defense / 150) * 100, 100)}%`}}
                                ></div>
                            </div>
                            <span className="text-cyan-400 font-bold text-sm">{defense}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    to={`poke-detail/${name}`}
                    className="block w-full mt-6 py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-black font-bold text-center rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 border border-cyan-400/50 relative overflow-hidden group uppercase tracking-wider"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Details</span>
                    </span>
                </Link>
            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>

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