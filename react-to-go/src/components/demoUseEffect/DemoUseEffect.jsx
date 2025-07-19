import React, {useCallback, useContext, useEffect, useState} from 'react';
import axios from "axios";
import DoctorCard from "./DoctorCard.jsx";
import {ContextName, NotificationContext} from "../../App.jsx";
import {useSearchParams} from "react-router-dom";

const DemoUseEffect = () => {
    const [doctors, setDoctors] = useState([]);
    const context = useContext(ContextName);
    const data = useContext(NotificationContext);
    const [searchParam, setSearchParam] = useSearchParams();
    // run only first time when component renders
    useEffect(() => {
        data.handleNotification("error", "This is a success message from context");
        axios({
            method: 'get',
            url: 'https://techleaf.pro/infertility-system/api/v1/public/doctors?page=0&size=100',
        }).then((res) => {
            setDoctors(res.data.result.content)
        })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, [])

    // run whenever the component updates
    useEffect(() => {
    })
    function render() {
        console.log("Render function called");
        return (
            <div>
                <h1>{doctors[0]?.fullName}</h1>
            </div>
        );
    }
    const [number, setNumber] = useState("");
    const functionCallBack = useCallback(render, [number])
    return (
        <div>
            {functionCallBack()}
            <input type={"text"} placeholder={"Enter number"} onChange={(event) => {
                setNumber(event.target.value)
            }}/>
            <label>Input doctor's name</label>
            <input type={"text"} className={"p-2 border border-black rounded-md"}
                   onChange={(event) => {
                       const dataQuery = Object.fromEntries(searchParam)
                       console.log("Data query: ", dataQuery)
                       setSearchParam({
                           ...dataQuery, name: event.target.value
                       });
                   }}/>
            <label>Input price</label>
            <input type={"text"} className={"p-2 border border-black rounded-md"}
                   onChange={(event) => {
                       const dataQuery = Object.fromEntries(searchParam)
                       console.log("Data query: ", dataQuery)
                       setSearchParam({
                           ...dataQuery,price: event.target.value
                       });
                   }}/>
            <div>
                {/* Header với hiệu ứng glow */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse uppercase tracking-wider">
                        ✨ Handle API from Backend ✨
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Grid Doctor Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-3">
                    {doctors?.map((doctor, index) => {
                        return (
                            <DoctorCard doctor={doctor}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DemoUseEffect;