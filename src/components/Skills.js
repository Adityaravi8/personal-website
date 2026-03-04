import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#1c1c2e]">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-14 text-center title-3d"
          data-aos="fade-up"
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items], ci) => (
            <div key={category} data-aos="fade-up" data-aos-delay={ci * 100}>
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-6 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#38bdf8,#2dd4bf)", boxShadow: "0 0 12px rgba(56,189,248,0.30)" }} />
                <h3 className="text-sm font-semibold uppercase tracking-widest gradient-text">
                  {category}
                </h3>
              </div>

              {/* Badge grid */}
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge-3d px-4 py-2 text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
