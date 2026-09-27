import {
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree",
    field: "Information Technology",
    institution: "Sri Ramalinga Sowdambigai College Of Science and Commerce",
    location: "Tamil Nadu, India",
    period: "2023 – 2026",
    description:
      "Focused on software development, programming, databases, web technologies and emerging technologies such as Data Science and Artificial Intelligence.",
    subjects: [
      "C",
      "C++",
      "Java",
      "Python",
      "Linux",
      "Visual Basic",
      ".NET",
      "html",
      "RDBMS",
      "SQL",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            My academic
            <span className="text-cyan-400"> background.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            My academic journey and the areas of technology
            that have shaped my development skills.
          </p>
        </div>

        {/* Education Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] md:p-9">

          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative">

            {/* Top */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              <div className="flex gap-5">

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5">
                  <GraduationCap
                    size={28}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-cyan-400">
                    Bachelor's Degree
                  </p>

                  <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                    {education[0].field}
                  </h3>

                  <p className="mt-2 text-lg text-gray-300">
                    {education[0].institution}
                  </p>
                </div>

              </div>

              {/* Date */}
              <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                <CalendarDays size={16} />
                {education[0].period}
              </div>

            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={16} />
              {education[0].location}
            </div>

            {/* Description */}
            <p className="mt-6 max-w-4xl leading-8 text-gray-400">
              {education[0].description}
            </p>

            {/* Subjects */}
            <div className="mt-8">

              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Areas of Study
              </h4>

              <div className="flex flex-wrap gap-2">
                {education[0].subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {subject}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}