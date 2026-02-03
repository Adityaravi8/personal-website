import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center title-3d inline-block w-full"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-container">
          {projects.map((p, i) => (
            <div
              key={i}
              className="card-3d bg-gray-900 rounded-lg p-6 flex flex-col justify-between border border-gray-800 relative"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-lg mt-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon hover:text-blue-400"
                    aria-label={`${p.title} GitHub`}
                  >
                    <FaGithub />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon hover:text-blue-400"
                    aria-label={`${p.title} live demo`}
                  >
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
