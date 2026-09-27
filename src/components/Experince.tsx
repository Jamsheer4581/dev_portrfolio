import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    role: "MERN STACK",
    company: "Karva Technologies",
    location: "Coimbatore, India",
    period: "Sep 2025 – Apr 2026",
    type: "Internship",
    description:
      "Worked on web application development and contributed to multiple application modules while gaining practical experience in frontend development, backend logic, databases and debugging.",
    responsibilities: [
      "Developed web application features using React.js, Node.js, Express.js, and MongoDB.",
      "Built responsive and reusable React.js UI components.",
      "Created and integrated REST APIs using Node.js and Express.js.",
      "Worked with MongoDB for storing and managing application data.",
      "Implemented CRUD operations and connected frontend components with backend APIs.",
      "Debugged issues and improved the functionality and user experience of web applications.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "node.js",
      "CRUD",
      "Git",
    ],
  },
    {
    role: "Data Science & AI",
    company: "Besant Technologies",
    location: "Chennai, India",
    period: "may 2026 – Oct 2026",
    type: "Internship",
    description:
      "Worked on web application development and contributed to multiple application modules while gaining practical experience in frontend development, backend logic, databases and debugging.",
    responsibilities: [
      "Worked with Python, Excel, SQL, and Power BI for data analysis and reporting.",
      "Cleaned and transformed datasets using Python and Pandas.",
      "Used SQL to query, filter, and manage data from databases.",
      "Analyzed data using Excel and created reports with formulas and PivotTables.",
      "Created interactive Power BI dashboards to visualize data and identify insights.",
      "Worked on data preparation, analysis, and visualization for business requirements.",
    ],
    technologies: [
      "Excel",
      "Python",
      "My SQL",
      "Power BI",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            My professional
            <span className="text-cyan-400"> journey.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            My experience working on real-world applications,
            development tasks and practical software projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent md:block" />

          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative md:pl-16"
            >

              {/* Timeline Icon */}
              <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#030712] md:flex">
                <Briefcase
                  size={18}
                  className="text-cyan-400"
                />
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] md:p-9 mt-10">

                {/* Top Section */}
                <div className="flex flex-col justify-between gap-5 md:flex-row">

                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                      {experience.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-gray-300">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {experience.location}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex h-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                    <CalendarDays size={16} />
                    {experience.period}
                  </div>

                </div>

                {/* Description */}
                <p className="mt-7 max-w-4xl leading-8 text-gray-400">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-7">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Key Responsibilities
                  </h4>

                  <div className="space-y-3">
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <div
                          key={responsibility}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          <p className="leading-7 text-gray-400">
                            {responsibility}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {experience.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}