import {
  Database,
  Code2,
  Brain,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "MERN Stack",
    description: "Building modern and responsive web applications.",
    icon: Code2,
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Data Science",
    description: "Working with data to discover useful insights.",
    icon: Database,
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Analysis",
      "SQL",
      "Excel",
      "Data Visualization",
      "Power BI",
    ],
  },
  {
    title: "AI ",
    description: "Exploring intelligent and data-driven solutions.",
    icon: Brain,
    skills: [
      "Chat GPT",
      "Deep Seek",
      "Claude",
      "Gemni",
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use during development and data work.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "MySQL",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Technologies I
            <span className="text-cyan-400"> work with.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            A combination of web development, data analysis and
            artificial intelligence technologies that I use to
            build and explore digital solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                  <Icon
                    size={24}
                    className="text-cyan-400"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}