import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} desckription={'JS is cool'}/>
                    <Skill title={'CSS'} desckription={'css is cool'}/>
                    <Skill title={'React'} desckription={'react is cool'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;