import { Code2, Brain, BarChart3 } from "lucide-react";

const areas = [
  {
    icon: Code2,
    title: "MERN Development",
    description:
      "Building responsive and scalable web applications using MongoDB, Express.js, React.js and Node.js.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Working with Python, data analysis, visualization and extracting useful insights from data.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Exploring AI concepts, machine learning and intelligent solutions for real-world applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Turning ideas into
            <span className="text-cyan-400"> digital solutions.</span>
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-gray-400">
            I'm a MERN Stack Developer with an interest in Data Science
            and Artificial Intelligence. I enjoy creating web applications,
            working with data and exploring intelligent technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >
                <Icon
                  size={32}
                  className="text-cyan-400 transition group-hover:scale-110"
                />

                <h3 className="mt-6 text-xl font-semibold">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}