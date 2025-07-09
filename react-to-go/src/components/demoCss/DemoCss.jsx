import React from 'react';
// import "./demoCss.css"
import style from "./demoCss.module.css";
const DemoCss = () => {
    return (
        <div className="demo_css">
            <h2 className={style.title}>Demo CSS</h2>
        </div>
    );
};

export default DemoCss;