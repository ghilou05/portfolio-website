import React from 'react'

const tech_icons: React.FC = () => {
    return (
        <div className="tech-icons">
            <div className="tech-icons__container">
                <div className="tech-icons__container__icon"><img src="/react-icon.png"></img></div>
                <div className="tech-icons__container__text">React</div>
            </div>
            <div className="tech-icons__container">
                <div className="tech-icons__container__icon"><img src="/c-sharp.png"></img></div>
                <div className="tech-icons__container__text">C#</div>
            </div>
            <div className="tech-icons__container">
                <div className="tech-icons__container__icon"><img src="/typescript.png"></img></div>
                <div className="tech-icons__container__text">TypeScript</div>
            </div>
            <div className="tech-icons__container">
                <div className="tech-icons__container__icon"><img src="/umbraco.png"></img></div>
                <div className="tech-icons__container__text">Umbraco</div>
            </div>
            <div className="tech-icons__container">
                <div className="tech-icons__container__icon"><img src="/kentico.png"></img></div>
                <div className="tech-icons__container__text">Kentico</div>
            </div>
        </div>
    )
};

export default tech_icons;