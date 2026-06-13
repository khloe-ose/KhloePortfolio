import { Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            {profile.name}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-blue/75 px-4 py-2.5 text-sm font-medium text-ink transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
          >
            <Mail size={17} />
            {profile.email}
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-blue/75 px-4 py-2.5 text-sm font-medium text-ink transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
