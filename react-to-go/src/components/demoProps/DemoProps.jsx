import React from 'react';

const DemoProps = (props) => {
    return (
        <div>
            <h2>Demo props: {props.age}</h2>
            <button onClick={() => props.updateAge()}
                className="py-2 px-5 border-2 border-purple-400 bg-purple-400 text-white rounded-md hover:bg-white hover:text-purple-400 hover:border-purple-400 active:bg-purple-800"
            >
                Click me
            </button>
        </div>
    );
};

export default DemoProps;