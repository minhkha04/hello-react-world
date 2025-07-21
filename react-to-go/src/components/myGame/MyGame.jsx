import React from 'react';
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import ResultGame from "./ResultGame.jsx";
import {resultGame, updateUserChoice} from "../../redux/slices/myGameSlice.js";

const MyGame = () => {
    const { xiNgau: { xiNgau1, xiNgau2, xiNgau3 }} = useSelector(state => state.myGameSlice);
    const  dispatch = useDispatch();
    return (
        <div>
            <div>
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase tracking-wider">
                    This is my game component.
                </h2>
                
                <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6 mb-8 relative overflow-hidden group">
                    {/* Cyberpunk glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <button onClick={() => {dispatch(updateUserChoice("Tài"))}} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-black font-bold text-xl uppercase tracking-wider rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 border-2 border-cyan-400/50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative z-10">Tài</span>
                        </button>
                        
                        <div className="bg-gray-800 border border-purple-500 rounded-lg p-6 flex gap-4">
                            <img 
                                src={`./public/lacXiNgau/${xiNgau1}.png`}
                                alt={""} 
                                className="w-20 h-20 bg-gray-700 border-2 border-cyan-400 rounded-lg object-cover hover:scale-110 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                            />
                            <img 
                                src={`./public/lacXiNgau/${xiNgau2}.png`}
                                alt={""} 
                                className="w-20 h-20 bg-gray-700 border-2 border-cyan-400 rounded-lg object-cover hover:scale-110 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                            />
                            <img 
                                src={`./public/lacXiNgau/${xiNgau3}.png`}
                                alt={""} 
                                className="w-20 h-20 bg-gray-700 border-2 border-cyan-400 rounded-lg object-cover hover:scale-110 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                            />
                        </div>
                        
                        <button onClick={() => {dispatch(updateUserChoice("Xỉu"))}} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-black font-bold text-xl uppercase tracking-wider rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 border-2 border-cyan-400/50 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative z-10">Xỉu</span>
                        </button>
                    </div>

                    {/* Corner accent lines */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
                </div>
                
                <ResultGame/>
                
                <div className="text-center">
                    <button onClick={() => dispatch(resultGame())} className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-black font-bold text-2xl uppercase tracking-wider rounded-lg transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/75 border-2 border-cyan-400/50 hover:border-purple-400 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative z-10">Play game</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyGame;