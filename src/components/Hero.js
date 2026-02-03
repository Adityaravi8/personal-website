import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { hero } from "../data/content";

function useTypingEffect(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypingEffect(hero.tagline, 60);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 relative overflow-hidden"
    >
      {/* 3D Floating background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl float-3d" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl float-3d-delay-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-3d-delay-2" />

      <div className="max-w-2xl text-center relative z-10">
        <p
          className="text-blue-400 text-lg mb-2 opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]"
        >
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">
          {hero.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
          <span className={done ? "" : "typing-cursor"}>{displayed}</span>
        </p>
        <p className="text-gray-400 mb-8 leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
          {hero.summary}
        </p>

        <div className="flex justify-center gap-6 text-2xl opacity-0 animate-[fadeInUp_0.6s_1s_forwards]">
          <a
            href={hero.github}
            target="_blank"
            rel="noreferrer"
            className="social-icon hover:text-blue-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-icon hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-10 flex-wrap opacity-0 animate-[fadeInUp_0.6s_1.2s_forwards]">
          <a
            href="#about"
            className="btn-3d-outline border border-blue-400 text-blue-400 px-6 py-3 rounded hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
          >
            Learn More About Me
          </a>
          <a
            href={hero.resume}
            download
            className="btn-3d btn-shine inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition-colors"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
