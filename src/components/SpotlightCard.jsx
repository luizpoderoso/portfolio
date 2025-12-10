import { useRef } from "react";

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Injeção de coordenadas direto no css da div
    div.style.setProperty("--mouse-x", `${x}px`);
    div.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`group/spotlight relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-2xl ${className}`}
    >
      {/* Efeito de Holofote */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
