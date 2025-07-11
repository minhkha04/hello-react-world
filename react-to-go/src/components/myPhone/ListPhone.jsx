import React from 'react';
import PhoneCard from "./PhoneCard.jsx";
import DetailPhone from "./DetailPhone.jsx";

const ListPhone = ({phones, title, phone, handlePhoneClick}) => {
    return (
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase tracking-wider">
                {title}
            </h2>
            <div className="grid grid-cols-4 gap-8 container">
                {phones.map((item, index) => {
                    return (
                        <PhoneCard phone={item} handlePhoneClick={handlePhoneClick} curPhone={phone}/>
                    )
                })}
            </div>
            <DetailPhone phone={phone}/>
        </div>
    );
};

export default ListPhone;