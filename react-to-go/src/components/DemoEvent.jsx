import React from 'react';

const DemoEvent = () => {

    function handleClick(name = 'world') {
        alert(`Hello, ${name}!`);
    }
    return (
        <div className="container">
            <button onClick={() => {handleClick("Kha")}} className="py-2 px-5 border-2 border-purple-400 bg-purple-400 text-white rounded-md hover:bg-white hover:text-purple-400 hover:border-purple-400 active:bg-purple-800">
                Say hello
            </button>
            <label className="block text-gray-300 mt-4 font-bold">
                Enter your name:
            </label>
            <input
                type="text"
                placeholder="Enter your name"
                className="block border rounded-md px-3 py-2 mt-2 w-full"
                onChange={(event) => handleClick(event.target.value)}
            />

        </div>
    );
};

export default DemoEvent;