
import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { RESUME_DATA } from "@/data/resume";
import { Code, Smartphone, Database, Rocket, Star } from "lucide-react";
import useDraggableList from "@/hooks/useDraggableList";

const iconMap: Record<string, JSX.Element> = {
  "TypeScript": <Code className="text-neon" size={22} />,
  "React/Next.js": <Smartphone className="text-neon" size={22}/>,
  "Node.js/Express.js": <Database className="text-neon" size={22}/>,
  "Prisma": <Database className="text-neon" size={22}/>,
  "Hono": <Rocket className="text-neon" size={22}/>,
  "langchain js": <Star className="text-neon" size={22}/>,
  "Touch Typing -> 100wpm": <Star className="text-neon" size={22}/>,
};

const SkillList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState(() => RESUME_DATA.skills);
  const { draggingIdx, dragOverIdx, dragHandlers } = useDraggableList(skills, setSkills);

  useEffect(() => {
    // (Optional) small fade animation on mount
    if (ref.current) {
      ref.current.classList.add("animate-fade-in");
      setTimeout(() => ref.current && ref.current.classList.remove("animate-fade-in"), 700);
    }
  }, []);

  return (
    <Section className="max-w-3xl mx-auto my-10 pt-7 pb-3 rounded-[2rem] backdrop-blur-lg bg-glass-bg-dark dark:bg-glass-bg-dark border border-neon/15 shadow-glow">
      <h2 className="text-2xl font-semibold mb-3 text-neon text-center">My Skills</h2>
      <div
        ref={ref}
        className="flex flex-wrap gap-3 justify-center mt-3"
        style={{ touchAction: 'pan-x' }}
      >
        {skills.map((skill, idx) => (
          <div
            key={skill}
            className={
              "skill-item bg-glass-bg-dark px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-neon/10 shadow transition duration-200 hover:scale-105 select-none cursor-grab" +
              (draggingIdx === idx ? " opacity-50" : "") +
              (dragOverIdx === idx && draggingIdx !== null ? " border-neon border-2" : "")
            }
            tabIndex={0}
            {...dragHandlers(idx)}
            aria-grabbed={draggingIdx === idx}
          >
            {iconMap[skill] || <Star size={20} className="text-neon" />}
            <span>{skill}</span>
            <span className="sr-only">Draggable skill</span>
          </div>
        ))}
      </div>
      {/* Text removed as requested */}
    </Section>
  );
};

export default SkillList;
