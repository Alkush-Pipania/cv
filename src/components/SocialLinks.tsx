
import React from "react";
import { RESUME_DATA } from "@/data/resume";

const SocialLinks = ({className=""}:{className?:string}) => (
  <div className={`flex items-center ${className}`}>
    {RESUME_DATA.contact.social.map((soc) => (
      <a
        href={soc.url}
        key={soc.name}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center transition hover:scale-115 hover:bg-neon/20 bg-glass-bg-dark text-neon rounded-full p-2 ml-1 shadow border border-neon/10"
        aria-label={soc.name}
      >
        <soc.icon size={19} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
