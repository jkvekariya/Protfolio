import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full neon-border shadow-[0_0_10px_rgba(0,255,179,0.8)] border-highlight"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-highlight opacity-50 transform md:-translate-x-1/2 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(0,229,255,0.8)] transform md:-translate-x-1/2 z-10 hidden md:block">
                    <div className="absolute inset-1 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 glass-panel p-8 rounded-2xl border hover:border-primary/50 transition-colors duration-300 relative group`}>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-muted mb-4 font-medium">
                        {exp.company}
                      </h4>
                      <p className="text-muted/80 leading-relaxed mb-6 whitespace-pre-line">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-muted group-hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
