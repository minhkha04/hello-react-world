import React from 'react';
import {useSelector} from "react-redux";

const ResultGame = () => {
    const {totalPoints, totalGame, userChoice, resultGame} = useSelector(state => state.myGameSlice);
    return (
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>

            <div className="relative z-10 space-y-4">
                <p className="text-purple-400 font-semibold uppercase tracking-wide text-lg border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-2">
                    Bạn chọn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold text-xl ml-2">{userChoice}</span>
                </p>
                <p className="text-purple-400 font-semibold uppercase tracking-wide text-lg border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-2">
                    Kết quả <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold text-xl ml-2">{resultGame}</span>
                </p>
                <p className="text-purple-400 font-semibold uppercase tracking-wide text-lg border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-2">
                    Tổng bàn thắng <span className="text-green-400 font-bold text-xl ml-2 px-2 py-1 bg-green-400/10 border border-green-400/30 rounded-md">{totalPoints}</span>
                </p>
                <p className="text-purple-400 font-semibold uppercase tracking-wide text-lg border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-2">
                    Tổng bàn chơi <span className="text-yellow-400 font-bold text-xl ml-2 px-2 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-md">{totalGame}</span>
                </p>

            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-500"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-500"></div>
        </div>
    );
};

export default ResultGame;