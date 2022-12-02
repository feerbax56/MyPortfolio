import React from 'react';
import s from './Portfolio.module.css'
const MyWork = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>1</div>
            <h3>{props.title}</h3>
            <span className={s.desckription}>{props.desckription}</span>
        </div>
    );
};

export default MyWork;