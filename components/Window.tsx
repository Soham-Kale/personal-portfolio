"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

let placeIndex = 0;

interface WindowProps {
  id: string;
  title: string;
  z: number;
  onClose: () => void;
  onFocus: () => void;
  className?: string;
  children: ReactNode;
}

export default function Window({ id, title, z, onClose, onFocus, className = "", children }: WindowProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const drag = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null);

  useEffect(() => {
    if (pos || !ref.current) return;
    const dw = document.documentElement.clientWidth;
    const dh = document.documentElement.clientHeight;
    const ww = Math.min(ref.current.offsetWidth || 580, dw - 24);
    const offset = (placeIndex % 5) * 28;
    placeIndex++;
    setPos({
      left: Math.max(12, (dw - ww) / 2 - 60 + offset),
      top: Math.max(50, dh * 0.1 + offset),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (window.innerWidth <= 900 || !pos) return;
    drag.current = { sx: e.clientX, sy: e.clientY, ox: pos.left, oy: pos.top };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || !ref.current) return;
    const d = drag.current;
    const w = ref.current;
    setPos({
      left: Math.min(
        Math.max(-w.offsetWidth + 120, d.ox + e.clientX - d.sx),
        document.documentElement.clientWidth - 80
      ),
      top: Math.min(
        Math.max(0, d.oy + e.clientY - d.sy),
        document.documentElement.clientHeight - 60
      ),
    });
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <section
      ref={ref}
      className={`window open ${className}`}
      data-app={id}
      style={pos ? { left: pos.left, top: pos.top, zIndex: z } : { zIndex: z, opacity: 0 }}
      onMouseDown={onFocus}
    >
      <div
        className="window-titlebar"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="traffic">
          <button
            className="light red"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
          <span className="light" />
          <span className="light" />
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="window-body">{children}</div>
    </section>
  );
}
