
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SkillList from "@/components/SkillList";
import ProjectGrid from "@/components/ProjectGrid";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { Toaster as Sonner } from "@/components/ui/sonner";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Theme setup
  useEffect(() => {
    // On load, force dark mode but also set up light mode toggle capability
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", savedTheme !== "light");
  }, []);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="relative min-h-screen w-full font-grotesk bg-gradient-to-br from-gray-50 to-white text-gray-900 dark:from-[#181925] dark:to-[#101013] dark:text-white transition-colors duration-300 overflow-x-hidden">
          <Sonner />
          <main>
            <Hero />
            <SkillList />
            <ProjectGrid />
            <Education />
            <Contact />
          </main>
          <div className="w-full text-center text-xs py-7 text-gray-500 dark:text-white/25">© 2025 Ankush. Made with React, Shadcn, Aceternity & GSAP</div>
        </div>
      )}
    </>
  );
};

export default Index;
