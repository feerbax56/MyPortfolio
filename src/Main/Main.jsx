import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (<div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span> OLOLOL!!</span>
                    <h1>Anton</h1>
                    <span>Poexali</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;