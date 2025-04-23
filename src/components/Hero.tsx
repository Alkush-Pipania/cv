import React, { useEffect, useRef } from "react";
import AceternityBlob from "./AceternityBlob";
import { RESUME_DATA } from "@/data/resume";
import Section from "./Section";
import { Eye, MapPin } from "lucide-react";
import ModeToggle from "./ModeToggle";
import SocialLinks from "./SocialLinks";
import gsap from "gsap";
import ThreeDObjects from "./3DObjects";

const Hero = () => {
  const avatarRef = useRef<HTMLImageElement>(null);

  // Animate avatar on mount
  useEffect(() => {
    if (avatarRef.current && gsap) {
      gsap.fromTo(
        avatarRef.current,
        { scale: 0.85, opacity: 0, y: 70 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }
      );
    }
  }, []);

  return (
    <Section className="relative pt-16 pb-8 xs:pb-16 flex flex-col items-center w-full min-h-[520px] justify-center font-grotesk">
      <ModeToggle />
      {/* BG BLOB */}
      <div className="absolute inset-x-0 flex justify-center top-12 md:top-4 z-0 pointer-events-none">
        <AceternityBlob />
      </div>

      {/* 3D Objects */}
      <ThreeDObjects />

      <div className="relative z-10 flex flex-col items-center mt-2 px-4">
        <img
          ref={avatarRef}
          src={RESUME_DATA.avatarUrl}
          alt={RESUME_DATA.name}
          className="rounded-full border-4 border-neon bg-glass-bg-dark w-32 h-32 shadow-lg ring-4 ring-neon/20"
        />
        <h1 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neon text-gradient-primary animate-fade-in text-center">
          {RESUME_DATA.name}
        </h1>
        <div className="mt-1 font-grotesk text-base text-gray-700 dark:text-white/80 font-light text-center">
          {RESUME_DATA.about}
        </div>
        <div className="mt-4 flex items-center gap-2 text-gray-500 dark:text-white/60 text-sm">
          <MapPin size={17} className="text-neon mr-1" />
          {RESUME_DATA.locationLink ? (
            <a
              href={RESUME_DATA.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-neon/70 underline-offset-4"
            >
              {RESUME_DATA.location}
            </a>
          ) : (
            RESUME_DATA.location
          )}
        </div>
        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          <a
            href={RESUME_DATA.resumelink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center font-medium px-5 py-2 rounded-full bg-glass-bg-dark hover:bg-neon text-neon border border-neon hover:text-black transition duration-200 shadow-glow backdrop-blur-lg animate-fade-in"
            style={{ textShadow: "0 2px 30px #9b87f5" }}
          >
            <Eye size={19} className="mr-2 group-hover:animate-bounce" />
            View Resume
          </a>
          <SocialLinks className="gap-3" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
