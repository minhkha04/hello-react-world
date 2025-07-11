import React from 'react';

const PhoneCard = ({phone, handlePhoneClick, curPhone}) => {
    const {name, image, os} = phone;
    const isSelected = curPhone?.name === name;
    return (
        <div
            className="bg-gray-900 border border-cyan-500 rounded-lg p-6 hover:border-pink-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            {/* Cyberpunk glow effect */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-80 object-cover rounded-md border border-gray-700 mb-4 group-hover:border-cyan-400 transition-colors duration-300"
                />
                <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide">
                    {name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                    <span className="text-purple-400 font-semibold">OS:</span> {os}
                </p>
                <button
                    className={`block w-full mt-6 py-3 px-6 font-bold text-center rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden group uppercase tracking-wider border-2 ${
                        isSelected
                            ? 'bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-pink-500/50 border-pink-400 hover:shadow-pink-500/75'
                            : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black shadow-cyan-500/25 border-cyan-400/50 hover:from-purple-600 hover:to-pink-500 hover:shadow-purple-500/50 hover:border-purple-400'
                    }`}
                    onClick={() => handlePhoneClick(phone)}
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">
        {isSelected ? 'Đã chọn' : 'Chi tiết'}
    </span>
                </button>
            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
        </div>
    );
};

export default PhoneCard;