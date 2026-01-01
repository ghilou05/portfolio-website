import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";



type Project = {
  id: string;
  title: string;
  description: string;
  tech: string;
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    id: "deckly",
    title: "Deckly",
    description: "Language-learning app focused on retention and recall.",
    tech: "React • TypeScript • API",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "afterlife",
    title: "Afterlife",
    description: "Puzzle-based game built during a Game Jam.",
    tech: "Unity • C#",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "fitness-hub",
    title: "Fitness Hub",
    description: "Multi-platform fitness tracking and planning app.",
    tech: "React • TypeScript • C#",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="featured_projects__card">
    <div className="featured_projects__card__title">
      <h2>{project.title}</h2>
    </div>

    <div className="featured_projects__card__desc">
      {project.description}
    </div>

    <div className="featured_projects__card__techs">
      {project.tech}
    </div>

    <div className="featured_projects__card__buttons">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          className="featured_projects__card__buttons__button1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          className="featured_projects__card__buttons__button2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      )}
    </div>
  </article>
);

const FeaturedProjects: React.FC = () => {
  return (
    <section className="featured_projects">
      <div className="featured_projects__heading">
        <div className="featured_projects__heading__title">
          <h2>Featured Projects</h2>
        </div>
        <div className="featured_projects__heading__sub-title">
          Things that I've built
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

export default FeaturedProjects;


