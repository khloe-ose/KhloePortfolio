import {
  CalendarDays,
  MessageSquare,
  RefreshCw,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

const dlsuLogo = "/images/dlsu-logo.svg";
const sscLogo = "/images/ssc.png";

const focusAreas = [
  {
    title: "Team Coordination",
    description:
      "I help keep projects organized by clarifying priorities, communicating updates, and making sure everyone stays aligned toward shared goals.",
    icon: UsersRound,
  },
  {
    title: "Adaptability",
    description:
      "I adjust quickly to changing needs, take initiative where needed, and support my team wherever I can contribute most effectively.",
    icon: RefreshCw,
  },
  {
    title: "Clear Communication",
    description:
      "I value open communication, thoughtful collaboration, and creating an environment where ideas, feedback, and responsibilities are shared clearly.",
    icon: MessageSquare,
  },
];

const experiences = [
  {
    organization: "Computer Studies Government – De La Salle University",
    role: "Project Management Executive",
    period: "2025 – Present",
    logo: "/images/csg.jpg",
    description:
      "Helped student initiatives stay organized and on schedule by coordinating timelines, deliverables, and communication across teams.",
    strengths: ["Planning", "Accountability", "Team coordination"],
  },
  {
    organization: "University Student Government (UVMW 2025)",
    role: "Tech Productions Team Leader",
    period: "2025 – 2026",
    logo: "/images/usg.jpg",
    description:
      "Led technical teams during large-scale university events, ensuring smooth execution through adaptability, teamwork, and clear communication.",
    strengths: ["Technical operations", "Delegation", "Event execution"],
  },
  {
    organization: "Google Developer Groups on Campus – DLSU",
    role: "Project and Events Core Lead",
    period: "2024 – 2025",
    logo: "/images/gdgoc.svg",
    description:
      "Planned and delivered programs for the student developer community while coordinating people, schedules, and shared goals from start to finish.",
    strengths: ["Workshops", "Community building", "Stakeholder alignment"],
  },
];

function About() {
  return (
    <section id="about" className="overflow-hidden bg-paper">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center">Growing through teamwork, curiosity, and hands-on experience.</p>
          <h2 className="section-heading mx-auto">
            About Me
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal className="rounded-[1.8rem] border border-line bg-paper-soft p-5 sm:p-6" delay={80}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Education
              </p>

              <div className="space-y-4">
                <EducationItem
                  logo={dlsuLogo}
                  alt="De La Salle University Manila logo"
                  school="De La Salle University Manila"
                  detail="BS Information Technology - Undergraduate Studies"
                />
                <EducationItem
                  logo={sscLogo}
                  alt="St. Scholastica's College Manila logo"
                  school="St. Scholastica's College Manila"
                  detail="2009-2022"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal className="rounded-[1.8rem] border border-line bg-paper p-6 shadow-soft-card" delay={120}>
              <p className="section-kicker">How I Work in a Team</p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Collaborative, adaptable, and steady in execution.
              </h3>
              <p className="mt-5 text-lg leading-8 text-muted">
                I thrive in team environments where everyone contributes in different ways. Whether guiding a project or supporting behind the scenes, I adapt to what the team needs most and stay committed to open communication and shared success.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal
                key={area.title}
                delay={index * 90}
                className="h-full"
              >
                <article className="editorial-card h-full p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-editorial">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 border-t border-line pt-16">
          <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">MY EXPERIENCES</p>
              <h2 className="section-heading">Beyond the Classroom</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Beyond academics, I've had the opportunity to lead initiatives,
              collaborate with diverse teams, and contribute to communities that
              have strengthened my skills.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.organization}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationItem({ logo, alt, school, detail }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.4rem] border border-line bg-paper-blue/70 p-4 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-500 hover:bg-brand-50 hover:shadow-editorial">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-line bg-white p-3 shadow-soft-card">
        <img src={logo} alt={alt} className="h-full w-full object-contain" />
      </div>
      <div>
        <h3 className="text-lg font-semibold leading-snug text-ink">{school}</h3>
        <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ experience, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 100}
      className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-line bg-paper-blue/70 shadow-soft-card"
    >
      <div className="border-b border-line bg-paper-soft p-5">
        <div className="mx-auto w-full max-w-[11rem] rounded-[1.35rem] border border-line bg-white p-3 shadow-soft-card">
          <div className="aspect-square overflow-hidden rounded-[0.95rem] bg-paper">
            <img
              src={experience.logo}
              alt={`${experience.organization} logo`}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-paper/75 px-3 py-1.5 text-xs font-medium text-muted">
            <CalendarDays size={14} />
            {experience.period}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
          {experience.role}
        </h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-brand-700">
          {experience.organization}
        </p>
        <p className="mt-5 text-sm leading-7 text-muted">
          {experience.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {experience.strengths.map((strength) => (
            <span key={strength} className="soft-chip">
              <Sparkles size={14} />
              {strength}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default About;
