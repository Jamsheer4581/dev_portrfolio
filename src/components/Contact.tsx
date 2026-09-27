"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let's
            <span className="text-cyan-400"> connect.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Have a project, opportunity or idea in mind?
            Feel free to reach out. I'd be happy to connect.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

            {/* Mail Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5">
              <Mail size={28} className="text-cyan-400" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Let's talk
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm interested in MERN development, Data Science,
              AI projects and opportunities where I can learn,
              build and contribute.
            </p>

            {/* Email */}
            <div className="mt-8 space-y-4">
              <a
                href="mailto:jamseer8110@gmail.com"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                jamseer8110@gmail.com
              </a>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">

                {/* GitHub */}
                <a
                  href="https://github.com/Jamsheer4581"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  <FaGithub size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jamseer-i-9932a0342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  <FaLinkedin size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-gray-400"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-400"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-400"
              >
                Message
              </label>

              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
            >
              <Send size={18} />
              Send Message
            </button>

            {/* Status */}
            {status && (
              <p className="mt-4 text-center text-sm text-cyan-400">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
