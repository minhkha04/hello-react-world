import React from 'react';
import Lottie from "lottie-react";
import pageNotFound from "./../../assets/animation/pageNotFound.json";
import {Link, useNavigate} from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={"h-screen flex justify-center items-center flex-col"}>
            <Lottie style={{height: "800px", width: "1000px"}} animationData={pageNotFound} loop={true}/>
            <h1 className={"text-4xl font-bold text-red-600 mt-8"}>Không tìm thấy trang</h1>
            {/*<Link to={"/"} className={"bg-red-500 text-white py-2 px-5 rounded-lg"}>Trang chủ</Link>*/}
            <button onClick={() => {navigate("/")}} className={"bg-red-500 text-white py-2 px-5 rounded-lg"}>Trang chủ</button>
        </div>
    );
};

export default PageNotFound;