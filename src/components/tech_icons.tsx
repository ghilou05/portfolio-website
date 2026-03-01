import React from 'react'

const tech_icons: React.FC = () => {
    // Definining the icons once to avoid repetition in the JSX
    const icons = [
        { src: "/react-icon.png", name: "React" },
        { src: "/c-sharp.png", name: "C#" },
        { src: "/typescript.png", name: "TypeScript" },
        { src: "/umbraco.png", name: "Umbraco" },
        { src: "/kentico.png", name: "Kentico" },
        { src: "", name: "Python"}
    ];

    return (
        <div className="tech-icons">
            <div className="tech-icons__scroller">
                {[1, 2, 3, 4].map((i) => (
                    <div className="tech-icons__list" key={i}>
                        {icons.map((icon, index) => (
                            <div className="tech-icons__container" key={index}>
                                <div className="tech-icons__container__icon">
                                    <img src={icon.src} alt={icon.name} />
                                </div>
                                <div className="tech-icons__container__text">{icon.name}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default tech_icons;