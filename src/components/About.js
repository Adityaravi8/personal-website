import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#16162a]">
      <div className="section-divider mb-24 max-w-4xl mx-auto -mt-24" />
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center title-3d"
          data-aos="fade-up"
        >
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="holo-panel p-8 md:p-10" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-4 text-[#94a3b8] leading-relaxed mb-8">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="section-divider my-6" />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {about.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[#94a3b8] text-sm"
                data-aos="fade-right"
                data-aos-delay={i * 80}
              >
                <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#38bdf8,#2dd4bf)", boxShadow: "0 0 8px rgba(56,189,248,0.35)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
