import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-up"
        >
          About <span className="gradient-text">Me</span>
        </h2>

        <div
          className="space-y-4 text-gray-300 leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {about.highlights.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-300"
              data-aos="fade-right"
              data-aos-delay={i * 100}
            >
              <span className="text-blue-400 mt-1">&#9654;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
