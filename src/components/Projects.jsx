import { BookOpen, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center">
            Projects centered on building practical, real-world systems.
          </p>
          <h2 className="section-heading mx-auto">
            My Projects
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              delay={index * 80}
              className="group overflow-hidden rounded-[1.8rem] border border-line bg-paper shadow-soft-card transition duration-300 hover:-translate-y-1 hover:shadow-editorial"
            >
              <div className="grid gap-0 lg:grid-cols-[0.76fr_1.24fr]">
                <div className="flex min-h-full flex-col justify-between border-b border-line bg-paper-soft p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-6 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-8 text-sm leading-7 text-muted">
                    Placeholder links are ready to replace.
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="max-w-3xl text-base leading-8 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="soft-chip">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <ProjectLink href={project.links.documentation} icon={BookOpen}>
                      Documentation
                    </ProjectLink>
                    <ProjectLink href={project.links.liveDemo} icon={ExternalLink}>
                      Live Demo
                    </ProjectLink>
                    <ProjectLink href={project.links.githubRepo} icon={Github}>
                      GitHub Repo
                    </ProjectLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLink({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/75 px-4 py-3 text-sm font-semibold text-ink transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
    >
      <Icon size={17} />
      {children}
    </a>
  );
}

export default Projects;
