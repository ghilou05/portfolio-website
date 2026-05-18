import React from 'react'
import TechIcons from './tech_icons';

const intro_banner: React.FC = () => {
    return (
        <div className="intro-banner">
            <div className="intro-banner__text-wrapper">
                <div className="intro-banner__text-wrapper__headline">
                    <h1 className="intro-banner__text-wrapper__headline__name">Hi, I'm
                        <br /> Ghiles Bouaraba</h1>
                    <div className="intro-banner__text-wrapper__headline__desc1"> CS & Maths Student | Web Developer
                        <br /> Building the future, through web and mobile apps
                    </div>
                </div>
                <div className="intro-banner__text-wrapper__buttons">
                    <a className="intro-banner__text-wrapper__buttons__button1" href="#projects">View Projects</a>
                    <a className="intro-banner__text-wrapper__buttons__button2" href="#contact">Contact Me</a>
                </div>
            </div>
            <TechIcons />

        </div>
    )
};

export default intro_banner;
