import React from 'react';
import {Link} from "react-router-dom";

const DoctorCard = ({doctor}) => {
    return (
        <div
            className="bg-gray-900 border border-cyan-500 rounded-lg p-6 hover:border-pink-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            {/* Cyberpunk glow effect */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
                {/* Doctor Avatar */}
                <div className="relative mb-6">
                    <div
                        className="w-32 h-32 mx-auto bg-gray-800 border-2 border-cyan-400 rounded-full overflow-hidden shadow-lg shadow-cyan-500/25 group-hover:border-purple-400 transition-colors duration-300">
                        <img
                            src={doctor.avatarUrl}
                            alt={doctor.fullName}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Doctor Name */}
                <h3 className="text-xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase tracking-wide">
                    Họ tên: {doctor.fullName}
                </h3>

                {/* Doctor Info */}
                <div className="space-y-3 mb-6">
                    <p className="text-purple-400 font-semibold text-sm border-l-4 border-cyan-400 pl-3 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                        <span className="uppercase tracking-wide">Chuyên khoa:</span>
                        <span className="text-gray-300 ml-2">{doctor.specialty}</span>
                    </p>
                    <p className="text-purple-400 font-semibold text-sm border-l-4 border-cyan-400 pl-3 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                        <span className="uppercase tracking-wide">Bằng cấp:</span>
                        <span className="text-gray-300 ml-2">{doctor.qualifications}</span>
                    </p>
                </div>

                {/* Action Button */}
                <Link to={`/demo-use-effect-detail/${doctor.id}`}
                    className="block w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-black font-bold text-center rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 border border-cyan-400/50 hover:border-purple-400 relative overflow-hidden group uppercase tracking-wider">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Xem chi tiết</span>
                </Link>
            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
        </div>
    );
};

export default DoctorCard;