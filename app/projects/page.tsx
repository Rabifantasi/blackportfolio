"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform : Dabbe Me Dabba",
    description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
    image: "/dabba.PNG",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://dabba-135z.vercel.app/",
    details: "Built a scalable e-commerce platform with features like product management, cart functionality, and dynamic routing."
  },
  {
    title: "Cat Blog Webiste",
    description: "A blogging wesite that showcases the best cat photos and care tips",
    image: "/cat.PNG",
    technologies: ["Nextjs", "TailwindCSS","Typescript"],
    liveUrl: "https://newcatblog3-ywkx.vercel.app/",
    details: "Developed a real-time Cat Blogging Website with features like Cat Blogs."
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js, TypeScript, and Custom CSS",
    image: "/port.PNG",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://custom-portfolio-ruby.vercel.app/",
    details: "Developed a beautiful and great looking Portfolio Website with about us and contact page."
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-accent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-16">
          <Briefcase className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Project Showcase</h1>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                    
                      <Link
                        href={project.liveUrl}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="mb-6">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}