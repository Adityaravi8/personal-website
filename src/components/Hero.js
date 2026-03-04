import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { hero } from "../data/content";

function useTypingEffect(text, speed = 70) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypingEffect(hero.tagline, 65);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#1c1c2e] text-[#e2e8f0] px-6 relative overflow-hidden"
    >
      {/* Soft background orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-[120px] float-3d"
        style={{ background: "rgba(56,189,248,0.07)" }} />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-[120px] float-3d-delay-1"
        style={{ background: "rgba(45,212,191,0.06)" }} />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full blur-[100px] float-3d-delay-2"
        style={{ background: "rgba(56,189,248,0.05)" }} />

      {/* Decorative 3D rings */}
      <div className="absolute right-16 top-1/4 hidden lg:block" style={{ perspective: "400px" }}>
        <div className="ring-outer" style={{
          width: 140, height: 140, borderRadius: "50%",
          border: "1.5px solid rgba(56,189,248,0.20)",
          boxShadow: "0 0 30px rgba(56,189,248,0.08)",
          animation: "spin-ring-a 18s linear infinite",
          position: "relative"
        }}>
          <div style={{
            position: "absolute", inset: 16,
            borderRadius: "50%",
            border: "1px solid rgba(45,212,191,0.18)",
            animation: "spin-ring-b 12s linear infinite reverse"
          }} />
        </div>
      </div>
      <div className="absolute left-12 bottom-1/3 hidden lg:block">
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          border: "1px solid rgba(56,189,248,0.15)",
          boxShadow: "0 0 20px rgba(56,189,248,0.06)",
          animation: "spin-ring-b 22s linear infinite"
        }} />
      </div>

      {/* Ring animations */}
      <style>{`
        @keyframes spin-ring-a {
          from { transform: rotateX(65deg) rotateZ(0deg); }
          to   { transform: rotateX(65deg) rotateZ(360deg); }
        }
        @keyframes spin-ring-b {
          from { transform: rotateY(55deg) rotateZ(0deg); }
          to   { transform: rotateY(55deg) rotateZ(360deg); }
        }
      `}</style>

      {/* Content */}
      <div className="max-w-2xl text-center relative z-10">
        <p className="text-[#38bdf8] text-base font-medium mb-3 tracking-widest uppercase opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
          Hi, my name is
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5 gradient-text opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]"
          style={{ filter: "drop-shadow(0 4px 24px rgba(56,189,248,0.15))" }}>
          {hero.name}
        </h1>

        <p className="text-xl md:text-2xl text-[#94a3b8] mb-6 h-9">
          <span className={done ? "" : "typing-cursor"}>{displayed}</span>
        </p>

        <p className="text-[#94a3b8] mb-10 leading-relaxed max-w-xl mx-auto opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
          {hero.summary}
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 text-2xl mb-10 opacity-0 animate-[fadeInUp_0.6s_1s_forwards]">
          <a href={hero.github} target="_blank" rel="noreferrer"
            className="social-icon text-[#94a3b8]" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={hero.linkedin} target="_blank" rel="noreferrer"
            className="social-icon text-[#94a3b8]" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex justify-center gap-5 flex-wrap opacity-0 animate-[fadeInUp_0.6s_1.2s_forwards]">
          <a href="#about"
            className="btn-3d-outline px-7 py-3 rounded-[10px] text-sm font-medium">
            Learn More
          </a>
          <a href={hero.resume} download
            className="btn-3d btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-[10px] text-sm">
            <FaFileDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
