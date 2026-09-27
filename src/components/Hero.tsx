import {
    ArrowDown,
    Download,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
        >
            {/* ================= BACKGROUND EFFECTS ================= */}

            {/* Main Glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Left Glow */}
            <div className="absolute left-10 top-32 -z-10 h-40 w-40 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Right Glow */}
            <div className="absolute bottom-10 right-10 -z-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* ================= MAIN CONTAINER ================= */}

            <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

                {/* ================= LEFT CONTENT ================= */}

                <div>

                    {/* Developer Badge */}
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                            MERN Stack Developer
                        </span>
                          
                    </div>
                    <div className="ml-3 mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 ">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 ">
                            Data Science & AI
                        </span>
                          
                    </div>
                    

                    {/* Main Heading */}
                    <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-2xl md:text-6xl">
                        Hi, I'm{" "}
                        <span className="text-cyan-400">
                            Jamseer
                        </span>
                        <span className="text-white">
                            .
                        </span>
                    </h1>

                    {/* Secondary Heading */}
                    <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
                        Data Science{" "}
                        <span className="text-cyan-400">
                            &
                        </span>{" "}
                        AI
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
                        I build modern web applications using the MERN stack
                        and explore data-driven solutions with Python,
                        Data Science and Artificial Intelligence.
                    </p>

                    {/* ================= BUTTONS ================= */}

<div className="mt-8 flex flex-col items-start gap-4">

    {/* Row 1 — View Projects */}
    <div>
        <a
            href="#projects"
            className="w-120 h-15  group flex items-center gap-2 rounded-full bg-cyan-400 px-43 py-3 font-semibold text-black shadow-lg shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20"
        >
            View Projects

            <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
            />
        </a>
    </div>

    {/* Row 2 — Resumes */}
    <div className="flex flex-wrap gap-4">

        {/* MERN Resume */}
        <a
            href="/MERN_STACK-Developer_resume.docx"
            download
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
            <Download size={18} />
            MERN Resume
        </a>

        {/* Data Science Resume */}
        <a
            href="/jams_resume_data_science.docx"
            download
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
            <Download size={18} />
            Data Science & AI Resume
        </a>

    </div>

    {/* Row 3 — Social Links */}
    <div className="flex items-center gap-4 pt-2">

        {/* GitHub */}
        <a
            href="https://github.com/Jamsheer4581"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
            <FaGithub size={20} />
            GitHub
        </a>

        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/jamseer-i-9932a0342/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
            <FaLinkedin size={20} />
            LinkedIn
        </a>

    </div>

</div>

                </div>

                {/* ================= RIGHT SIDE ================= */}

                <div className="relative hidden h-[450px] items-center justify-center md:flex">

                    {/* Outer Ring */}
                    <div className="absolute h-[390px] w-[390px] animate-[spin_25s_linear_infinite] rounded-full border border-cyan-400/10" />

                    {/* Middle Ring */}
                    <div className="absolute h-[320px] w-[320px] rounded-full border border-cyan-400/10" />

                    {/* Inner Glow */}
                    <div className="absolute h-[260px] w-[260px] rounded-full bg-cyan-400/5 blur-3xl" />

                    {/* Developer Card */}
                    <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-center shadow-2xl backdrop-blur-xl">


                        <img 
                        src="Jamseer.jpeg"
                        alt="jamseer"/>
                        {/* Code Icon */}
                        {/* <div className="text-6xl font-bold text-cyan-400">
                            {"</>"}
                        </div>

                        <p className="mt-5 text-sm font-semibold tracking-[0.25em] text-white">
                            BUILD
                        </p>

                        <p className="mt-1 text-sm font-semibold tracking-[0.25em] text-cyan-400">
                            ANALYZE
                        </p>

                        <p className="mt-1 text-sm font-semibold tracking-[0.25em] text-white">
                            INNOVATE
                        </p> */}

                        {/* Technology Tags */}
                        {/* <div className="mt-5 flex gap-2">
                            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-gray-400">
                                MERN
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-gray-400">
                                DATA
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-gray-400">
                                AI
                            </span>
                        </div> */}

                    </div>

                    {/* Floating MERN Card */}
                    <div className="absolute right-5 top-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                        <p className="text-xs text-gray-500">
                            Stack
                        </p>

                        <p className="mt-1 text-sm font-semibold text-cyan-400">
                            MERN
                        </p>
                    </div>

                    {/* Floating Data + AI Card */}
                    <div className="absolute bottom-12 left-5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                        <p className="text-xs text-gray-500">
                            Focus
                        </p>

                        <p className="mt-1 text-sm font-semibold text-cyan-400">
                            Data + AI
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}