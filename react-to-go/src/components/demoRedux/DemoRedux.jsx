import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateFullName} from "../../redux/slices/userSlice.js";
import useInput from "../../hook/useInput.jsx";

const DemoRedux = () => {
    const handleUsernameChange = useDispatch();
    const account = useInput("minh kha");
    console.log(account)
    return (
        <div>
            {/* Galaxy glow effect */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h2 className="text-2xl font-bold text-cyan-400 mb-6 uppercase tracking-wide border-b border-purple-500 pb-2 text-center">
                Function Redux
            </h2>

            <div className="relative z-10 p-3">
                <label className="block text-purple-400 font-semibold uppercase tracking-wide mb-2">
                    Username
                </label>
                <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-4/12 bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 transition-all"
                    onChange={(event) => {
                        handleUsernameChange(updateFullName(event.target.value))
                    }}
                />
                <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-4/12 bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 transition-all block"
                    onChange={account.onChange}
                    value={account.value}
                />
            </div>
        </div>
    );
};

export default DemoRedux;