"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowDown, Code, Github, Linkedin, Mail, Monitor, Palette, Briefcase, Brain, Download, Send, FileText, User, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import AnimatedCube from "@/components/3d-cube";
import { useState, useRef } from "react";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "Sanity",
  "JavaScript", "Git", "Responsive Design", "UI/UX Design", "Wordpress", "ChatGPT", "SEO" , "Figma", "VERCEL" , "Netlify" 
];

const projects = [
  {
    title: "E-commerce Platform : Dabbe Me Dabba",
    description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
    image: "/dabba.PNG",
    
  },
  {
    title: "Cat Blog Webiste",
    description: "A blogging wesite that showcases the best cat photos and care tips",
    image: "/cat.PNG",
    
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js, TypeScript, and Custom CSS",
    image: "/port.PNG",
   
  },
  {
    title: "Wordpress Website",
    description: "A website built with wordpress, elementor and SEO",
    image: "/33.png.png",
   
  },
  {
    title: "e-commerce Website",
    description: "A website built with Next.js, TypeScript, and Tailwind CSS ",
    image: "/334.png",
   
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(springScroll, [0, 1], [1, 0.8]);
  const opacity = useTransform(springScroll, [0, 1], [1, 0.3]);

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resumeContent = `
      ${resumeData.fullName}
      ${resumeData.email} | ${resumeData.phone}
      ${resumeData.location}

      Summary:
      ${resumeData.summary}

      Experience:
      ${resumeData.experience}

      Education:
      ${resumeData.education}

      Skills:
      ${resumeData.skills}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    a.click();
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent" ref={scrollRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX: springScroll }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ scale, opacity }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6"
          >
            Rabia Farooq Shaikh
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            Frontend Developer & UI Enthusiast
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-4 justify-center mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/Rabifantasi?tab=repositories" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rabia-farooq-abdullah-shaikh-462061260/" },
              { icon: Mail, href: "rabifantasif@gmail.com" },
            ].map((social, index) => (
              <motion.div key={index} variants={item}>
                <Link href={social.href} className="hover:text-primary transition-colors">
                  <social.icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10"
        >
          <ArrowDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-card/30"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <User className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">About Me</h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <motion.p variants={item} className="text-lg leading-relaxed mb-6">
              Hello! I'm Rabia, a passionate Frontend Developer with a keen eye for creating beautiful and functional web experiences. Currently in my learning journey, I'm constantly exploring new technologies and pushing my boundaries in web development.
            </motion.p>
            <motion.p variants={item} className="text-lg leading-relaxed mb-6">
              My journey in web development and wordpress started with a curiosity for creating interactive user interfaces. Since then, I've been working on various projects, learning new technologies, and improving my skills in React, Next.js, and modern web development practices.
            </motion.p>
            <motion.p variants={item} className="text-lg leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences wordpress and nextjs websites that are both beautiful and functional. When I'm not coding, you can find me exploring new design trends, learning about web accessibility, or contributing to the developer community.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What I Do
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Creating responsive and performant web applications using modern technologies.",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Designing beautiful and intuitive user interfaces with attention to detail.",
              },
              {
                icon: Monitor,
                title: "Responsive Design",
                description: "Ensuring websites work flawlessly across all devices and screen sizes.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card rounded-lg shadow-lg"
              >
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">Projects</h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">Skills</h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                }}
                className="bg-card p-4 rounded-lg text-center shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center">
            <AnimatedCube />
          </div>
        </div>
      </section>

      {/* Resume Builder Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">Resume Builder</h2>
          </motion.div>
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleResumeSubmit}
            className="space-y-6"
          >
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={resumeData.fullName}
                  onChange={(e) => setResumeData({ ...resumeData, fullName: e.target.value })}
                  className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={resumeData.email}
                  onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                  className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </motion.div>
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={resumeData.phone}
                  onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                  className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={resumeData.location}
                  onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                  className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary"
                />
              </div>
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Professional Summary</label>
              <textarea
                value={resumeData.summary}
                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary h-32"
                required
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Experience</label>
              <textarea
                value={resumeData.experience}
                onChange={(e) => setResumeData({ ...resumeData, experience: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary h-32"
                required
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Education</label>
              <textarea
                value={resumeData.education}
                onChange={(e) => setResumeData({ ...resumeData, education: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary h-32"
                required
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Skills</label>
              <textarea
                value={resumeData.skills}
                onChange={(e) => setResumeData({ ...resumeData, skills: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary h-32"
                required
              />
            </motion.div>
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Generate Resume
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
          </motion.div>
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleContactSubmit}
            className="space-y-6"
          >
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary"
                required
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary"
                required
              />
            </motion.div>
            <motion.div variants={item}>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary h-32"
                required
              />
            </motion.div>
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}