import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";



type Project = {
  id: string;
  title: string;
  description: string;
  tech: { name: string; color: string }[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    id: "deckly",
    title: "Deckly",
    description: "Language-learning app focused on retention and recall.",
    tech: [
      { name: "React", color: "#00d8ff" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "API", color: "#c86bab" }
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "afterlife",
    title: "Afterlife",
    description: "Puzzle-based game built during a Game Jam.",
    tech: [
      { name: "Unity", color: "#ffffff" },
      { name: "C#", color: "#9b4993" }
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "fitness-hub",
    title: "Fitness Hub",
    description: "Multi-platform fitness tracking and planning app.",
    tech: [
      { name: "React", color: "#00d8ff" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "C#", color: "#9b4993" }
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="featured_projects__card">
    <div className="featured_projects__card__top-area">
      <FontAwesomeIcon icon={faLayerGroup} className="featured_projects__card__icon" />
      <div className="featured_projects__card__links">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        )}
      </div>
    </div>
    <div className="featured_projects__card__text-wrapper">
      <div className="featured_projects__card__title">
        <h3>{project.title}</h3>
      </div>

      <div className="featured_projects__card__desc">
        {project.description}
      </div>

      <div className="featured_projects__card__techs">
        {project.tech.map((t) => (
          <div
            className="featured_projects__card__techs__tech"
            style={{ "--dot-color": t.color } as React.CSSProperties}
          >
            {t.name}
          </div>
        ))}
      </div>
    </div>
  </article>
);

const ProjectCards: React.FC = () => {
  return (
    <section className="featured_projects">
      <div className="featured_projects__heading">
        <div className="featured_projects__heading__sub-title">
          Work
        </div>
        <div className="featured_projects__heading__title">
          <h1>Projects</h1>
        </div>
        <div className="featured_projects__heading__sub-title" style={{ marginTop: "15px" }}>
          A selection of things I've built — from full-stack web apps to mobile and academic projects.
        </div>
      </div>

      {/* DESKTOP — native horizontal scroll */}
      <div className="featured_projects__cards featured_projects__cards--desktop">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* MOBILE — Swiper */}
      <Swiper
        className="featured_projects__cards featured_projects__cards--mobile"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectCards;


