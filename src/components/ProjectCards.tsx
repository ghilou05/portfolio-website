import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { EffectCards } from 'swiper/modules';
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
    id: "deckly-reloaded",
    title: "Deckly Reloaded",
    description: "A rebuild of the original deckly, as a proper functioning webapp.",
    tech: [
      { name: ".NET 9", color: "purple", },
      { name: "React.ts", color: "#00d8ff"},
      { name: "Sql Server", color: "blue"},
      { name: "Azure", color: "lightblue"}
    ],
    liveUrl: "https://agreeable-tree-0b4032b03.7.azurestaticapps.net/login",
    repoUrl: "https://github.com/ghilou05/deckly-reloaded"

  },
  {
    id: "deckly",
    title: "Deckly",
    description: "A simple language learning app built around flashcards and spaced repetition to make vocabulary practice more structured and consistent.",
    tech: [
      { name: "Python", color: "#00d8ff" },
      { name: "SQLite", color: "#3178c6" },
      { name: "Machine Learning", color: "#c86bab" }
    ],
    repoUrl: "https://github.com/ghilou05/Deckly",
  },
  // {
  //   id: "afterlife",
  //   title: "Afterlife",
  //   description: "A 2D GameJam game developed in a small team, where players navigate through levels solving puzzles and overcoming obstacles to progress.",
  //   tech: [
  //     { name: "Unity", color: "#ffffff" },
  //     { name: "C#", color: "#9b4993" }
  //   ],
  //   liveUrl: "#",
  //   repoUrl: "#",
  // },
  {
    id: "snapbook",
    title: "Snapbook",
    description: "A hackathon-built web app as a team of 4, where users upload landmark photos, automatically detect their locations, and visualise visited countries on an interactive 3D globe.",
    tech: [
      {name: "React", color: "#00d8ff"},
      {name: "Firebase", color: "red"}
    ],
    liveUrl: "https://snapbook-nine.vercel.app/",
    repoUrl: "https://github.com/ghilou05/snapbook/tree/main",
  },
  {
    id: "fitness-hub",
    title: "Fitness Hub",
    description: "Currently developing a multi-platform fitness tracking and planning app.",
    tech: [
      { name: "Next.js", color: "#3178c6" },
      { name: "TypeScript", color: "#00d8ff"},
      { name: "Supabase", color: "#9b4993" }
    ],
    liveUrl: "https://fithub-live-repo-qk18.vercel.app/",
  },
  {
    id: "yt-shorts-compiler",
    title: "Shorts Compiler",
    description: "A simple tool that generates an autoscrolling playlist of all of a youtube channel's shorts.",
    tech: [
      { name: "Next.js", color: "#3178c6" },
      { name: "Youtube API", color: "orange" }
    ],
    liveUrl: "https://yt-web-project.vercel.app/",
    repoUrl: "https://github.com/ghilou05/yt-web-project",
  },
  {
    id: "amphibian-engine",
    title: "Amphibian Engine",
    description: "A hackathon-built chrome extension as a team of 4, that raises a virtual pet according to how many web pages you visit.",
    tech: [
      { name: "HTML/CSS", color: "white" },
      { name: "JavaScript", color: "orange" },
      { name: "MongoDB", color: "purple" }
    ],
    repoUrl: "https://github.com/ghilou05/Amphibian-Engine",

  },
  {
    id: "flicks",
    title: "Flicks",
    description: "A simple movie recommendation engine, for our first year team project, built as a team of 7.",
    tech: [
      { name: "HTML/CSS", color: "white" },
      { name: "JavaScript", color: "orange" },
      { name: "FastAPI", color: "red" }

    ],
    repoUrl: "https://github.com/ghilou05/Flicks"
  }
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
    <section className="featured_projects" id='projects'>
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
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
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


