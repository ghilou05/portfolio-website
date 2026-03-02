import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faGraduationCap, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

type Experience = {
    id: string;
    role: string;
    company: string;
    date: string;
    description: string;
    tech: string[];
    icon: any;
};

const experiences: Experience[] = [
    {
        id: "placement-dev",
        role: "Placement Web Developer",
        company: "Your Company Name",
        date: "Sep 2024 – Present",
        description: "Placeholder",
        tech: ["React", ".NET", "MySQL", "Agile"],
        icon: faBriefcase,
    },
    {
        id: "bsc-cs",
        role: "BSc Computer Science & Mathematics",
        company: "Your University",
        date: "Sep 2022 – Jun 2026 (expected)",
        description: "Studying core CS modules alongside pure and applied mathematics. Key modules include Algorithms & Data Structures, Discrete Mathematics, Machine Learning, and Software Engineering.",
        tech: ["Algorithms", "Machine Learning", "Maths", "Software Eng."],
        icon: faGraduationCap,
    },
];

const TimelineItem: React.FC<{ exp: Experience, isLast: boolean }> = ({ exp, isLast }) => {
    const itemRef = React.useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`experiences__timeline__item ${isVisible ? 'is-visible' : ''} ${isLast ? 'is-last' : ''}`}
        >
            <div className="experiences__timeline__item__icon-wrapper">
                <div className="experiences__timeline__item__icon-box">
                    <FontAwesomeIcon icon={exp.icon} />
                </div>
            </div>

            <article className="experiences__timeline__item__card">
                <div className="experiences__timeline__item__card__header">
                    <div className="experiences__timeline__item__card__header__info">
                        <h3>{exp.role}</h3>
                        <h4 className="experiences__timeline__item__card__header__info__company">{exp.company}</h4>
                    </div>
                    <div className="experiences__timeline__item__card__header__date">
                        <FontAwesomeIcon icon={faCalendarAlt} className="experiences__timeline__item__card__header__date__calendar" />
                        <span>{exp.date}</span>
                    </div>
                </div>

                <p className="experiences__timeline__item__card__desc">
                    {exp.description}
                </p>

                <div className="experiences__timeline__item__card__techs">
                    {exp.tech.map((t, i) => (
                        <span key={i} className="experiences__timeline__item__card__techs__tech">{t}</span>
                    ))}
                </div>
            </article>
        </div>
    );
};

const Experiences: React.FC = () => {
    return (
        <section className="experiences">
            <div className="experiences__heading">
                <div className="experiences__heading__sub-title">
                    Background
                </div>
                <div className="experiences__heading__title">
                    <h1>Experience</h1>
                </div>
            </div>

            <div className="experiences__timeline">
                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={exp.id}
                        exp={exp}
                        isLast={index === experiences.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experiences;
