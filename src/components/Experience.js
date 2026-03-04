import { experience } from "../data/content";

/* Mouse-tracking 3D tilt handlers */
function onTiltMove(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width  - 0.5;
  const y = (e.clientY - rect.top)  / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
  el.style.transition = "box-shadow 0.3s ease";
}
function onTiltLeave(e) {
  const el = e.currentTarget;
  el.style.transform = "";
  el.style.transition = "transform 0.5s ease, box-shadow 0.35s ease";
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#1c1c2e]">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-14 text-center title-3d"
          data-aos="fade-up"
        >
          Experience
        </h2>

        <div className="relative perspective-container">
          {/* Vertical neon line */}
          <div className="absolute left-[6px] top-0 bottom-0 w-[2px] rounded-full ml-2"
            style={{ background: "linear-gradient(180deg, var(--accent), var(--accent-2), transparent)" }} />

          <div className="space-y-8 pl-10">
            {experience.map((job, i) => (
              <div
                key={i}
                className="card-3d card-shimmer p-6 relative"
                data-aos="fade-up"
                data-aos-delay={i * 130}
                onMouseMove={onTiltMove}
                onMouseLeave={onTiltLeave}
              >
                {/* Timeline dot */}
                <span className="timeline-dot absolute -left-[42px] top-8 w-[14px] h-[14px]" />

                <h3 className="text-lg font-semibold text-[#e2e8f0] mb-1">{job.title}</h3>
                <p className="text-[#38bdf8] text-sm font-medium mb-1">
                  {job.company}{job.location && ` — ${job.location}`}
                </p>
                <p className="text-xs text-[#4a5568] mb-4 font-mono">{job.date}</p>

                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent-2)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
