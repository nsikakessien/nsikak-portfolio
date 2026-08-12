"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Send,
  ChevronRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    title: "Health Hub",
    category: "Full Stack",
    description:
      "Appointment booking, lab request viewing, and prescription access through a unified dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "Neon DB", "Tailwind CSS"],
    github: "https://github.com/nsikakessien/health-hub-backend",
    live: "https://health-hub-frontend-flax.vercel.app/",
  },
  {
    title: "Cine Track",
    category: "Full Stack",
    description:
      "Interactive movie discovery and tracking dashboard with user authentication, custom watchlists, and API ratings.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Neon DB",
      "Tailwind CSS",
    ],
    github: "https://github.com/nsikakessien/Cine-Track-Backend",
    live: "https://cine-track-peach.vercel.app/",
  },
  {
    title: "Gemini Chatbot Clone",
    category: "Frontend",
    description:
      "Gemini Clone is a React-based web application that emulates the conversational AI experience of Google's Gemini. It allows users to interact with an AI assistant powered by the Gemini API, providing responses to user prompts in real time.",
    tech: ["React", "Gemini API"],
    github: "https://github.com/nsikakessien/Gemini-Clone",
    live: "https://nsk-gemini-clone.netlify.app/",
  },
];

const skills = [
  {
    name: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases",
    icon: Database,
    items: ["PostgreSQL", "Prisma", "MongoDB", "Neon DB", "Mongoose"],
  },
  {
    name: "Tools & Mobile",
    icon: Code2,
    items: ["Git", "Docker", "React Native", "Expo", "Vercel"],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Unable to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Radial Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Nsikak Imeh-Essien
          </a>
          <div className="flex gap-6 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new projects
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-100 mb-6">
            Building scalable <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              full-stack applications.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            I craft responsive user interfaces and backend architectures,
            combining clean code with modern design principles.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              View Work <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold rounded-lg transition-all"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">
              Featured Projects
            </h2>
            <p className="text-slate-400 mt-2">
              A selection of recent web and mobile applications.
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0 bg-slate-900/80 p-1 border border-slate-800 rounded-lg">
            {["All", "Full Stack", "Frontend"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <div className="flex gap-3 text-slate-400">
                    <a
                      href={project.github}
                      className="hover:text-slate-100 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="hover:text-slate-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-2">
          Technical Skills
        </h2>
        <p className="text-slate-400 mb-12">
          Core tools and frameworks used across the stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/30 border border-slate-800/80 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-slate-800/60 rounded-lg text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-200">
                    {skillGroup.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-2 text-center">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-center mb-8 max-w-md mx-auto">
            Have a project in mind or looking to hire? Drop me a message.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-xs">{errorMessage}</p>
            )}

            {status === "success" ? (
              <div className="flex items-center justify-center gap-2 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg text-sm">
                <CheckCircle2 className="w-4 h-4" /> Message Sent Successfully!
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8 px-6 text-center text-xs text-slate-500">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-slate-300 transition-colors">
            <FaGithub className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Nsikak Imeh-Essien.</p>
      </footer>
    </div>
  );
}
