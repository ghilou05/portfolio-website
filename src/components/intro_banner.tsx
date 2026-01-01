import { Link } from "react-router-dom";
import React from 'react'

const intro_banner: React.FC = () => {
    return (
        <div className="intro-banner">
            <div className="intro-banner__text-wrapper">
                <div className="intro-banner__text-wrapper__headline">
                    <h1>HI DAD</h1>
                    <h2 className="intro-banner__text-wrapper__headline__name">Hi, I'm <span className="blue-text">Ghiles Bouaraba</span>👋</h2>
                    <div className="intro-banner__text-wrapper__headline__desc1"> Computer Science & Mathematics Student</div>
                    <div className="intro-banner__text-wrapper__headline__desc2"><span className="blue-text">Developer</span> | Year in Industry</div>
                </div>
                <hr/>
                <div className="intro-banner__text-wrapper__bottom">
                    <div className="intro-banner__text-wrapper__bottom__text">I build clean, accessible web applications with React, TypeScript, and C#</div>
                </div>
                <div className="intro-banner__text-wrapper__buttons">
                    <div className="intro-banner__text-wrapper__buttons__button1">View Projects</div>
                    <div className="intro-banner__text-wrapper__buttons__button2">Contact Me</div>
                </div>
            </div>
            <div className="intro-banner__graphic">
                <img src="/laptopgraphic.png"></img>
            </div>
        </div>
    )
};

export default intro_banner;