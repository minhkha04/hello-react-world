import React, {useState} from 'react';

const DemoState = () => {
    const [state, setState] = useState(8);
    const [nameState, setName] = useState('');
    let mark = 9;
    return (
        <div>
            DemoState Component
            <p>{mark}</p>
            <p>Current state: {state}</p>
            <button onClick={() => {
                setState(state + 1);
            }}
                className="py-2 px-5 border-2 border-purple-400 bg-purple-400 text-white rounded-md hover:bg-white hover:text-purple-400 hover:border-purple-400 active:bg-purple-800">
                Click me
            </button>
            <label htmlFor="" className="block">
                Enter your name:
            </label>
            <input className="block" onChange={(event) => {
                let curName = event.target.value;
                setName(curName)
            }}/>
            <p>Your name is: {nameState}</p>
        </div>
    );
};

export default DemoState;