import React from 'react';
import avatar from '../img/avatar.webp';
import './Landing.css';

const Landing = () => {
    return (
        <section id="landing" className="landing">
            <img src={avatar} alt="Avatar" className="avatar"/>
            <h1>Asma Hussaini</h1>
            <p>CS Student at UCA</p>
        </section>
    );
};

export default Landing;
