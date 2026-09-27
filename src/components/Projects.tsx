"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, ProjectCategory } from "@/data/projects";
const filters: ("All" | ProjectCategory)[] = [
  "All",
  "MERN",
  "Data Science",
];

export default function Projects() {  const [activeFilter, setActiveFilter] =
    useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Things I've
            <span className="text-cyan-400"> built.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            A selection of projects showcasing my experience
            in web development, data analysis and technology.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-cyan-400 text-black"
                  : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-cyan-400/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >

              {/* Project Preview */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10">

                <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

                <div className="relative rounded-2xl border border-white/10 bg-black/30 px-8 py-6 text-center backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                    {project.category}
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    {project.title}
                  </p>
                </div>

              </div>

              {/* Project Content */}
              <div className="p-7">

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-400">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex gap-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-cyan-400"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-cyan-400"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}