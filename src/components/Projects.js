import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#16162a]">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-14 text-center title-3d"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="card-3d card-shimmer p-7 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div>
                {/* Project number */}
                <p className="text-xs font-mono text-[#4a5568] mb-2 tracking-widest uppercase">
                  Project {String(i + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-semibold text-[#e2e8f0] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#94a3b8] mb-5 leading-relaxed">
                  {p.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge px-3 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-5 text-lg">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="social-icon text-[#4a5568]" aria-label={`${p.title} GitHub`}>
                    <FaGithub />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="social-icon text-[#4a5568]" aria-label={`${p.title} live`}>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
