
import React, { useEffect, useRef } from "react";
import { RESUME_DATA } from "@/data/resume";
import Section from "./Section";
import { Award } from "lucide-react";
import gsap from "gsap";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && gsap) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <Section className="max-w-lg mx-auto mb-14">
      <div ref={ref} className="flex flex-col gap-3 rounded-xl bg-glass-bg-dark border border-neon/10 p-6 shadow-glow">
        <div className="flex gap-3 items-center mb-1">
          <Award size={22} className="text-neon" />
          <div className="font-semibold text-neon">Education</div>
        </div>
        {RESUME_DATA.education.map((e) => (
          <div key={e.school}>
            <div className="font-bold text-white/90">{e.school}</div>
            <span className="block text-white/70 font-light">{e.degree}</span>
            <span className="block text-xs text-white/40 mt-0.5">{e.start}–{e.end}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
