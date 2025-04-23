import React from "react";
import { Mail, LinkedinIcon, X, GithubIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import Section from "./Section";

const Contact = () => {
  return (
    <Section className="max-w-2xl mx-auto rounded-2xl p-8 bg-glass-bg-dark border border-neon/10 mb-8 shadow-glow">
      <h2 className="text-xl font-bold mb-2 text-neon">Contact Me</h2>
      <div className="text-white/80 mb-4">
        If you'd like to collaborate, chat, or just say hi:
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-2 text-neon hover:text-white/80 transition">
          <Mail size={19}/><span>Email</span>
        </a>
        {RESUME_DATA.contact.social.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neon hover:text-white/80 transition">
            {s.name === "GitHub" && <GithubIcon size={18}/>}
            {s.name === "LinkedIn" && <LinkedinIcon size={18}/>}
            {/* {s.name === "X" && <X size={18}/>} */}
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
