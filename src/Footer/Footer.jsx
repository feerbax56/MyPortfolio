import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <h2 className={s.title}>Anton Evseev</h2>
            <div className={s.links}>
                <a href="https://github.com/feerbax56"><img className={s.logo}
                                                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                                            alt="git hub"/></a>
                <img
                    src="https://png.pngtree.com/png-vector/20210513/ourlarge/pngtree-2022-number-design-for-new-year-png-image_3282320.jpg"
                    alt="2022" className={s.logo}/>
            </div>
            <h3 className={s.title}>IT incubator</h3>
        </div>
    );
};

export default Footer;