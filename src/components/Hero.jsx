import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

const qualities = [
  "Leadership",
  "Project Coordination",
  "Adaptability",
];

function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-7xl px-5 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-8">
      <div className="grid min-h-[calc(100vh-74px)] items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <p className="section-kicker">Beyond the Paper</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[0.94] text-ink sm:text-5xl lg:text-6xl">
            Hi, I'm Khloe!
          </h1>

          <div className="mt-5 space-y-1.5 text-base font-medium text-ink sm:text-lg">
            <p>BS Information Technology Student</p>
            <p className="text-brand-700">Seeking Internship Opportunities</p>
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Beyond building systems, I enjoy bringing people and ideas together to make projects successful. My experiences leading student initiatives have strengthened my ability to communicate effectively, stay organized, solve problems thoughtfully, and contribute both technically and as a team leader.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
              <Mail size={17} />
            </a>
            <a
              href={profile.linkedIn}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <Linkedin size={17} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {qualities.map((quality) => (
              <span key={quality} className="soft-chip">
                {quality}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[340px] lg:mr-0 lg:max-w-[360px]" delay={120}>
          <div className="overflow-hidden rounded-[1.8rem] border border-line bg-paper-blue p-2 shadow-editorial">
            <img
              src={profile.photo}
              alt="Khloe Cassandra Oseña seated in a warm cafe setting"
              className="h-auto w-full rounded-[1.35rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
