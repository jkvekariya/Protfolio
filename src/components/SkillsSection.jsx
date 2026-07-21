import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

function SkillProgressBar({ name, level, index, color }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-white font-medium tracking-wide">{name}</span>
        <span className="text-sm font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function FloatingBadge({ name, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, boxShadow: `0 0 15px ${color}80` }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="px-6 py-3 rounded-xl glass-panel border border-white/10 text-white font-medium tracking-wide cursor-default transition-all duration-300"
      style={{ borderColor: `${color}40` }}
    >
      {name}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              Frontend Development
            </h3>
            {portfolioData.skills.frontend.map((skill, index) => (
              <SkillProgressBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
                color="#00E5FF" // primary
              />
            ))}
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
              Backend Development
            </h3>
            {portfolioData.skills.backend.map((skill, index) => (
              <SkillProgressBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
                color="#7C3AED" // secondary
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Database & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-highlight mb-8 text-center">
              Database Architecture
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.database.map((skill, index) => (
                <FloatingBadge
                  key={skill.name}
                  name={skill.name}
                  index={index}
                  color="#00FFB3"
                />
              ))}
            </div>
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary mb-8 text-center">
              Tools & Version Control
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.tools.map((skill, index) => (
                <FloatingBadge
                  key={skill.name}
                  name={skill.name}
                  index={index}
                  color="#00E5FF"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
