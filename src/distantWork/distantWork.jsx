import React from 'react';
import s from "./distantWork.module.css";

const DistantWork = () => {
    return (
        <div className={s.distantContainer}>
            <h2 className={s.title}>Distant works</h2>
            <button>hire me</button>
        </div>
    );
};

export default DistantWork;