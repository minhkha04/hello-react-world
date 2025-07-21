import React from 'react';

const InputCustom = ({
                         labelContent,
                         id,
                         placeholder,
                         name,
                         onChange,
                         value,
                         type,
                         classWrapper = "",
                         onBlur,
                         error,
                         touched,
                         readOnly,
                     }) => {
    return (
        <div className={classWrapper}>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {labelContent}
            </label>
            <input
                type={type}
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                readOnly={readOnly}
            />
            {error && touched ?<p className={"text-red-500"}>{error}</p> : null}
        </div>
    );
};

export default InputCustom;
