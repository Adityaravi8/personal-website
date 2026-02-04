import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center title-3d inline-block w-full"
          data-aos="fade-up"
        >
          Experience
        </h2>

        <div className="space-y-10 perspective-container">
          {experience.map((job, i) => (
            <div
              key={i}
              className="card-3d border-l-2 border-blue-400 pl-6 relative bg-gray-800/50 p-6 rounded-lg ml-2"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <span className="timeline-dot absolute -left-[11px] top-8 w-4 h-4 bg-blue-400 rounded-full" />

              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-blue-400 mb-1">
                {job.company}{job.location && ` — ${job.location}`}
              </p>
              <p className="text-sm text-gray-400 mb-3">{job.date}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
