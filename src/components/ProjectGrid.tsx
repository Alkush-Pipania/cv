import React, { useEffect, useRef } from "react";
import Section from "./Section";
import { RESUME_DATA } from "@/data/resume";
import { Link as LinkIcon } from "lucide-react";

const projectImages: Record<string, string> = {
  "Carter": "/lovable-uploads/8e399451-fcbd-4a74-b07a-8e2cba435faa.png",
  "GOOG prompt ai": "/lovable-uploads/d04302d7-1dfe-4f73-a4fa-8138b50b02ff.png",
  "Website Builder": "/Builder.png"
};

const ProjectGrid = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in animation on mount
    if (ref.current) {
      ref.current.classList.add("animate-fade-in");
      setTimeout(() => ref.current && ref.current.classList.remove("animate-fade-in"), 700);
    }
  }, []);

  return (
    <Section className="mx-auto max-w-5xl pt-5 pb-12">
      <h2 className="text-2xl font-bold text-neon mb-6 text-center">Projects</h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-6">
        {RESUME_DATA.projects.map((p) => (
          <a
            key={p.title}
            href={p.link?.href ?? "#"}
            className="proj-card group bg-glass-bg-dark dark:bg-glass-bg-dark border border-neon/10 rounded-2xl shadow-glow overflow-hidden p-5 flex flex-col gap-3 transition-transform duration-200 hover:scale-105 relative"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            {/* Show project image if available */}
            {projectImages[p.title] && (
              <img
                src={projectImages[p.title]}
                alt={`${p.title} screenshot`}
                className="w-full max-h-40 rounded-xl object-cover mb-3 border border-neon/10"
                style={{ background: "rgba(155, 135, 245, 0.1)" }}
                loading="lazy"
              />
            )}
            <div className="flex-grow">
              <h3 className="font-semibold text-lg text-neon">{p.title}</h3>
              <div className="text-white/80 text-sm mt-1 mb-2">{p.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.techStack.map((t) => (
                  <span key={t} className="bg-glass-bg-light text-xs text-black/80 font-medium rounded-full px-2 py-0.5 border border-neon/15">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {p.link?.href && (
              <span className="flex mt-4 items-center text-neon hover:text-white transition">
                <LinkIcon size={18} className="mr-1" />
                {p.link.label}
              </span>
            )}
            <span className="absolute inset-0 pointer-events-none" />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default ProjectGrid;
