"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js, Tailwind, and deployed on Vercel.",
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI chatbot powered by NLP and OpenAI API.",
    github: "https://github.com/your-username/ai-chatbot",
    demo: "https://ai-chatbot-demo.vercel.app",
  },
  {
    title: "E-Commerce App",
    description: "Fullstack store with Next.js, MongoDB, and Stripe payments.",
    github: "https://github.com/your-username/ecommerce-app",
    demo: "https://ecommerce-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6 text-center">🚀 Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <Github size={18} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-green-600"
              >
                <ExternalLink size={18} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

