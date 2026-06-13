import { useCallback, useRef, useState } from "react";
import { BarChart3, BookOpen, ChevronLeft, ChevronRight, ExternalLink, FileText, Github, LockKeyhole, QrCode } from "lucide-react";
import {
  SiAxios,
  SiExpress,
  SiJsonwebtokens,
  SiLucide,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { projects } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

const technologyIcons = {
  "React.js": { icon: SiReact, color: "#149ECA" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#171A1F" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#171A1F" },
  bcrypt: { icon: LockKeyhole, color: "#315B82" },
  Recharts: { icon: BarChart3, color: "#3F719F" },
  "Lucide React": { icon: SiLucide, color: "#F56565" },
  qrcode: { icon: QrCode, color: "#171A1F" },
  pdfkit: { icon: FileText, color: "#315B82" },
  "React Router": { icon: SiReactrouter, color: "#CA4245" },
  Axios: { icon: SiAxios, color: "#5A29E4" },
};

function Projects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProject = useCallback((index) => {
    const nextIndex = (index + projects.length) % projects.length;
    const track = trackRef.current;
    const slide = track?.children[nextIndex];

    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(nextIndex);
  }, []);

  const updateActiveProject = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, nextIndex)));
  }, []);

  const handleWheel = useCallback((event) => {
    const track = trackRef.current;

    if (!track || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
      return;
    }

    const atStart = track.scrollLeft <= 0;
    const atEnd = Math.ceil(track.scrollLeft + track.clientWidth) >= track.scrollWidth;

    if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
      return;
    }

    event.preventDefault();
    track.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  }, []);

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

        <Reveal className="mt-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2" aria-label="Project slides">
              {projects.map((project, index) => (
                <button
                  type="button"
                  key={project.title}
                  className={`h-2.5 rounded-full transition ${
                    activeIndex === index ? "w-8 bg-brand-700" : "w-2.5 bg-line hover:bg-brand-100"
                  }`}
                  onClick={() => scrollToProject(index)}
                  aria-label={`Show ${project.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          <div className="relative mt-5">
            <button
              type="button"
              className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft-card transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white sm:-left-4 lg:-left-16"
              onClick={() => scrollToProject(activeIndex - 1)}
              aria-label="Previous project"
            >
              <ChevronLeft size={19} />
            </button>

            <div
              ref={trackRef}
              className="project-carousel-track flex gap-5 overflow-x-auto rounded-[1.8rem]"
              onScroll={updateActiveProject}
              onWheel={handleWheel}
              aria-roledescription="carousel"
              aria-label="Featured projects"
              tabIndex={0}
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group min-w-full snap-start overflow-hidden rounded-[1.8rem] border border-line bg-paper shadow-soft-card transition duration-300 hover:shadow-editorial"
                >
                  <div className="grid h-full gap-0 lg:grid-cols-[0.76fr_1.24fr]">
                    <div className="flex min-h-full flex-col justify-between border-b border-line bg-paper-soft p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <div>
                        <h3 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                          {project.title}
                        </h3>
                        {project.image && (
                          <div className="mt-6 flex h-56 items-center justify-center overflow-hidden rounded-[1.25rem] border border-line bg-white p-2 shadow-soft-card sm:h-72 lg:h-80">
                            <img
                              src={project.image.src}
                              alt={project.image.alt}
                              className="max-h-full w-full rounded-[0.85rem] object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col p-6 sm:p-8">
                      <p className="max-w-3xl text-base leading-8 text-muted">
                        {project.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2.5">
                        {project.technologies.map((technology) => (
                          <TechnologyChip key={technology} technology={technology} />
                        ))}
                      </div>

                      <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-auto lg:pt-8">
                        <ProjectLink link={project.links.documentation} icon={BookOpen}>
                          Documentation
                        </ProjectLink>
                        <ProjectLink link={project.links.liveDemo} icon={ExternalLink}>
                          Live Demo
                        </ProjectLink>
                        <ProjectLink link={project.links.githubRepo} icon={Github}>
                          GitHub Repo
                        </ProjectLink>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft-card transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white sm:-right-4 lg:-right-16"
              onClick={() => scrollToProject(activeIndex + 1)}
              aria-label="Next project"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TechnologyChip({ technology }) {
  const iconConfig = technologyIcons[technology];
  const Icon = iconConfig?.icon;

  return (
    <span className="soft-chip">
      {Icon ? (
        <Icon
          className="h-4 w-4 shrink-0"
          style={{ color: iconConfig.color }}
          aria-hidden="true"
        />
      ) : null}
      <span>{technology}</span>
    </span>
  );
}

function ProjectLink({ link, icon: Icon, children }) {
  const linkConfig =
    typeof link === "string"
      ? { href: link, label: children }
      : { label: children, ...link };

  const sharedClassName =
    "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/75 px-4 py-3 text-sm font-semibold text-ink transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700";

  if (linkConfig.disabled) {
    return (
      <span
        className={`${sharedClassName} cursor-not-allowed opacity-60 hover:border-line hover:bg-white/75 hover:text-ink`}
        aria-disabled="true"
      >
        <Icon size={17} />
        {linkConfig.label}
      </span>
    );
  }

  return (
    <a
      href={linkConfig.href}
      target={linkConfig.external ? "_blank" : undefined}
      rel={linkConfig.external ? "noreferrer" : undefined}
      className={sharedClassName}
    >
      <Icon size={17} />
      {linkConfig.label}
    </a>
  );
}

export default Projects;
