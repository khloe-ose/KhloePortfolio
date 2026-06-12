import { useState } from "react";
import {
  ClipboardCheck,
  Clock3,
  Code2,
  Database,
  FileText,
  Handshake,
  Layers,
  Lightbulb,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  ShieldCheck,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skillGroups } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

const icons = {
  technical: Layers,
  programming: Code2,
  tools: Wrench,
  soft: Handshake,
  web: MonitorSmartphone,
  design: Palette,
  database: Database,
  requirements: ClipboardCheck,
  documentation: FileText,
  project: Target,
  agile: RefreshCw,
  python: SiPython,
  javascript: SiJavascript,
  java: FaJava,
  php: SiPhp,
  sql: Database,
  html: SiHtml5,
  css: SiCss,
  kotlin: SiKotlin,
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  androidStudio: SiAndroidstudio,
  vscode: VscVscode,
  leadership: ShieldCheck,
  team: UsersRound,
  adaptability: RefreshCw,
  communication: MessageSquare,
  accountability: ClipboardCheck,
  problemSolving: Lightbulb,
  goal: Target,
  time: Clock3,
};

function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState(skillGroups[0].id);
  const activeCategory =
    skillGroups.find((group) => group.id === activeCategoryId) || skillGroups[0];
  const ActiveIcon = icons[activeCategory.icon] || Layers;

  return (
    <section id="skills" className="bg-paper-soft">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center">Built for technical work and team-based execution.</p>
          <h2 className="section-heading mx-auto">
            My Skills
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <div
            className="grid gap-2 rounded-[1.75rem] border border-line bg-white/75 p-2 shadow-soft-card sm:grid-cols-2 lg:grid-cols-4"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillGroups.map((group) => {
              const CategoryIcon = icons[group.icon] || Layers;
              const isActive = group.id === activeCategoryId;

              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  id={`skills-tab-${group.id}`}
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${group.id}`}
                  onClick={() => setActiveCategoryId(group.id)}
                  className={`flex items-center justify-center gap-2 rounded-[1.25rem] px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-ink text-white shadow-soft-card"
                      : "text-muted hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  <CategoryIcon className="h-4 w-4" aria-hidden="true" />
                  {group.title}
                </button>
              );
            })}
          </div>

          <div
            id={`skills-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeCategory.id}`}
            className="editorial-card mt-6 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {activeCategory.title}
                </h3>
              </div>

              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-700">
                <ActiveIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {activeCategory.items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const SkillIcon = icons[skill.icon] || Code2;

  return (
    <div className="flex min-h-16 items-center gap-3 rounded-[1.25rem] border border-line bg-paper/70 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:bg-brand-50">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700">
        <SkillIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-ink">{skill.name}</span>
    </div>
  );
}

export default Skills;
