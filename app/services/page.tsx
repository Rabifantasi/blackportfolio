"use client";

import { motion } from "framer-motion";
import { Code, Layout, Lightbulb, Rocket, Search, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like Next.js, and TypeScript.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Modern Framework Integration"
    ]
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces that enhance user experience.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design"
    ]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving website visibility and search engine rankings through proven SEO strategies.",
    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Performance Optimization"
    ]
  },

  {
    icon: Lightbulb,
    title: "Consultation",
    description: "Expert advice on web development strategies and technical solutions.",
    features: [
      "Technical Planning",
      "Architecture Design",
      "Technology Selection",
      "Best Practices Guide"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-accent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}