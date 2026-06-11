import { Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-muted">
            Built with React.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2.5 text-sm font-medium text-ink transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
          >
            <Mail size={17} />
            {profile.email}
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2.5 text-sm font-medium text-ink transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
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
