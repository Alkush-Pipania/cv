
import { useRef, useState } from "react";

type DragHandlers = (idx: number) => {
  draggable: boolean;
  onDragStart: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
};

export default function useDraggableList<T>(
  list: T[],
  setList: (l: T[]) => void
) {
  const dragItemIdx = useRef<number | null>(null);
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  const swapItems = (a: number, b: number) => {
    if (a === b) return;
    const next = [...list];
    const [removed] = next.splice(a, 1);
    next.splice(b, 0, removed);
    setList(next);
  };

  // Desktop drag logic
  const dragHandlers: DragHandlers = (idx) => ({
    draggable: true,
    onDragStart: () => {
      dragItemIdx.current = idx;
      setDraggingIdx(idx);
    },
    onDragOver: (e) => {
      e.preventDefault();
      setDragOverIdx(idx);
    },
    onDrop: () => {
      if (dragItemIdx.current !== null) {
        swapItems(dragItemIdx.current, idx);
      }
      setDraggingIdx(null);
      setDragOverIdx(null);
      dragItemIdx.current = null;
    },
    onDragEnd: () => {
      setDraggingIdx(null);
      setDragOverIdx(null);
      dragItemIdx.current = null;
    },
    // Mobile touch drag (very basic horizontal)
    onTouchStart: () => {
      dragItemIdx.current = idx;
      setDraggingIdx(idx);
    },
    onTouchMove: (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      // Find element at touch
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!target) return;
      const parent = target.closest('.skill-item');
      if (!parent) return;
      const siblings = Array.from(document.querySelectorAll('.skill-item'));
      const overIdx = siblings.indexOf(parent as HTMLElement);
      if (overIdx !== -1) setDragOverIdx(overIdx);
    },
    onTouchEnd: () => {
      if (dragItemIdx.current !== null && dragOverIdx !== null) {
        swapItems(dragItemIdx.current, dragOverIdx);
      }
      setDraggingIdx(null);
      setDragOverIdx(null);
      dragItemIdx.current = null;
    }
  });

  return { dragHandlers, draggingIdx, dragOverIdx };
}
