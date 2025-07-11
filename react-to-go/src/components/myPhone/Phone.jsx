import React, {useState} from 'react';
import ListPhone from "./ListPhone.jsx";
import {useSelector} from "react-redux";

const Phone = () => {
    const phones =  useSelector(state => state.phoneSlice);
    const [phone, setPhone] = useState();
    function handlePhoneClick(selectedPhone) {
        setPhone(selectedPhone);
    }
    return (
        <div>
            <ListPhone phones={phones} title={"Danh sách điên thoại"} phone={phone} handlePhoneClick={handlePhoneClick}/>
        </div>
    );
};

export default Phone;