import React from 'react';
import s from './Nav.module.css'
const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={''}>Main</a>
            <a href={''}>Links</a>
            <a href={''}>portfolio</a>
            <a href={''}>About my</a>
            <a href={''}>Contacts</a>
        </div>
    );
};

export default Nav;