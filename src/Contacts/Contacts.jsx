import React from 'react';
import s from './Contacts.module.css'
const Contacts = () => {
    return (
        <div className={s.contactsContainer}>
            <h2 className={s.title}>Contacts</h2>
            <form action={'url'} className={s.form}>
                <input type="text" required/>
                <input type="text" required/>
                <textarea rows="3"></textarea>
            </form>
            <button>Send!</button>
        </div>
    );
};

export default Contacts;