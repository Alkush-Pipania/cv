
import { Sun, Moon } from "lucide-react";
import React, { useEffect } from "react";

const ModeToggle = () => {
  // Controlled by toggling 'dark' class on <html>
  const [dark, setDark] = React.useState(() => 
    document.documentElement.classList.contains("dark")
  );
  
  useEffect(() => {
    const listener = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDark(isDark);
    };
    
    // Listen for changes to the theme
    window.addEventListener("storage", listener);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", listener);
    
    return () => {
      window.removeEventListener("storage", listener);
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);
  
  function toggleMode() {
    const isDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event("storage"));
  }
  
  return (
    <button
      aria-label="Toggle color mode"
      className="fixed top-5 right-4 z-50 rounded-full p-2 bg-glass-bg-dark dark:bg-glass-bg-light transition-colors border border-white/10 shadow-glow hover:scale-110 hover:shadow-lg text-neon"
      onClick={toggleMode}
    >
      {dark ? <Sun size={20} /> : <Moon size={21} />}
    </button>
  );
};

export default ModeToggle;
