
import React, { useRef, useEffect, useState } from "react";
import { Move } from "lucide-react";

const DRAGGABLE_ID = "draggable-ankush";

const DraggableName = () => {
  // Initial position is set to where it was originally in the Hero section
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const offset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
      setHasMoved(true);
    }
    function onTouchMove(e: TouchEvent) {
      if (!dragging || !e.touches[0]) return;
      setPosition({
        x: e.touches[0].clientX - offset.current.x,
        y: e.touches[0].clientY - offset.current.y,
      });
      setHasMoved(true);
    }
    function stopDragging() {
      setDragging(false);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [dragging]);

  function startDrag(e: React.MouseEvent | React.TouchEvent) {
    setDragging(true);
    const clientX =
      "touches" in e && e.touches[0] ? e.touches[0].clientX : "clientX" in e ? e.clientX : 0;
    const clientY =
      "touches" in e && e.touches[0] ? e.touches[0].clientY : "clientY" in e ? e.clientY : 0;
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
    // Prevent default scroll when dragging on mobile
    if ("preventDefault" in e) e.preventDefault();
  }

  return (
    <div
      ref={ref}
      id={DRAGGABLE_ID}
      style={{
        position: hasMoved ? "fixed" : "static",
        left: hasMoved ? position.x : "auto",
        top: hasMoved ? position.y : "auto",
        zIndex: 10000,
        touchAction: "none",
        cursor: dragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      className="drop-shadow-lg rounded-xl bg-gradient-to-br from-glass-bg-dark via-glass-bg-light to-neon px-6 py-2 flex items-center gap-2 text-4xl font-bold text-neon select-none"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      aria-label="Draggable Ankush Name"
    >
      <Move size={28} className="mr-2 opacity-70" />
      ankush
    </div>
  );
};

export default DraggableName;
