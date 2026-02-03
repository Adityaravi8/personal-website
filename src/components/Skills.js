import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center title-3d inline-block w-full"
          data-aos="fade-up"
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <div key={category} data-aos="fade-up" data-aos-delay={ci * 100}>
              <h3 className="text-lg font-semibold gradient-text mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge-3d bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm cursor-default"
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
