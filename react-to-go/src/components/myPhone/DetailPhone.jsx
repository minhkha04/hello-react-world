import React from 'react';

const DetailPhone = ({phone}) => {
    return (
        phone ?
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6 transition-all relative overflow-hidden group  container mt-[80px]">
            {/* Cyberpunk glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 "></div>

            <div className="relative z-10 flex">
                <div className="w-4/12 pr-6">
                    <img
                        src={phone?.image}
                        alt=""
                        className="w-full h-auto object-cover rounded-md border border-gray-700 shadow-lg shadow-cyan-500/25"
                    />
                </div>
                <div className="w-8/12">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6 uppercase tracking-wide border-b border-purple-500 pb-2">
                        Thông số kỹ thuật
                    </h3>
                    <table className="w-full">
                        <tbody className="space-y-2">
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Tên sản phẩm: {phone?.name}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Màn hình: {phone?.screen}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Hệ điều hành: {phone?.os}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Cam trước: {phone?.rear_camera}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Cam sau: {phone?.front_camera}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Ram: {phone?.ram}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-4 text-purple-400 font-semibold uppercase tracking-wide">Rom: {phone?.rom}</td>
                            <td className="py-3 px-4 text-gray-300"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
        </div>
        : ""
    );
};

export default DetailPhone;