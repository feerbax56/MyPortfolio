import React from 'react';
import s from './Portfolio.module.css'
import styleContainer from "../common/styles/Container.module.css";
import MyWork from "./MyWork";

const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={`${s.portfolioContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Portfolio</h2>
                <div className={s.portfolio}>
                    <MyWork title={'First'} desckription={'Первый проект'}/>
                    <MyWork title={'Second'} desckription={'Второй проект'}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;