import { Code2, Handshake, Layers, Wrench } from "lucide-react";
import { skillGroups } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

const icons = [Layers, Code2, Wrench, Handshake];

function Skills() {
  return (
    <section id="skills" className="bg-paper-soft">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker justify-center">Built for technical work and team-based execution.</p>
          <h2 className="section-heading mx-auto">
            Capabilities
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] || Code2;

            return (
              <Reveal
                as="article"
                key={group.title}
                delay={index * 90}
                className="editorial-card p-6 sm:p-7"
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink">
                    {group.title}
                  </h3>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-700">
                    <Icon size={20} />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span key={item} className="soft-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
