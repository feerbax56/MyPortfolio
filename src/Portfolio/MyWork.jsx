import React from 'react';
import s from './Portfolio.module.css'
const MyWork = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <a href="">Посмотреть!</a></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.desckription}</span>
        </div>
    );
};

export default MyWork;