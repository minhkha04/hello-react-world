import React from 'react';

const ButtonCustom = ({content, type = "button", bgColor = "bg-blue-500", onclick}) => {
    return (
        <button
            type={type}
            className={`text-white rounded-md px-5 py-2 ${bgColor}`}
            onClick={onclick}
        >
            {content}
        </button>
    );
};

export default ButtonCustom;
