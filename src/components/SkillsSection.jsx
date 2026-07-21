import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

// Skill icons mapped by name
const skillIcons = {
  // Frontend
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  React: "⚛️",
  Tailwind: "🌊",
  Bootstrap: "🅱️",
  // Backend
  "Node.js": "🟢",
  Express: "🚂",
  "RESTful API": "🔗",
  "JWT Auth": "🔐",
  // Database
  MongoDB: "🍃",
  MySQL: "🐬",
  SQL: "🗃️",
  Firebase: "🔥",
  // Tools
  Git: "🔀",
  GitHub: "🐙",
  Postman: "📮",
  Docker: "🐳",
  Linux: "🐧",
};

// Gradient per category
const categoryConfig = {
  frontend: {
    label: "Frontend Development",
    gradient: "linear-gradient(90deg, #00E5FF, #7C3AED)",
    glow: "0 0 20px rgba(0,229,255,0.4)",
    accent: "#00E5FF",
    icon: "💻",
  },
  backend: {
    label: "Backend Development",
    gradient: "linear-gradient(90deg, #7C3AED, #F72585)",
    glow: "0 0 20px rgba(124,58,237,0.4)",
    accent: "#7C3AED",
    icon: "⚙️",
  },
  database: {
    label: "Database Architecture",
    gradient: "linear-gradient(90deg, #00FFB3, #00E5FF)",
    glow: "0 0 20px rgba(0,255,179,0.4)",
    accent: "#00FFB3",
    icon: "🗄️",
  },
  tools: {
    label: "Tools & DevOps",
    gradient: "linear-gradient(90deg, #F72585, #FF9500)",
    glow: "0 0 20px rgba(247,37,133,0.4)",
    accent: "#F72585",
    icon: "🛠️",
  },
};

function SkillBar({ name, level, index, config }) {
  return (
    <motion.div
      className="group mb-5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skillIcons[name] || "🔧"}</span>
          <span className="text-white font-semibold text-sm tracking-wide">{name}</span>
        </div>
        <motion.span
          className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
          style={{
            color: config.accent,
            background: `${config.accent}18`,
            border: `1px solid ${config.accent}40`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>

      {/* Track */}
      <div
        className="relative h-2.5 w-full rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {/* Animated Fill */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          style={{
            background: config.gradient,
            boxShadow: config.glow,
          }}
        />
        {/* Shimmer overlay */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({ category, skills }) {
  const config = categoryConfig[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl p-6 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${config.accent}25`,
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Glow accent in top-right corner */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: config.accent }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{
            background: `${config.accent}18`,
            border: `1px solid ${config.accent}40`,
          }}
        >
          {config.icon}
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{config.label}</h3>
          <div
            className="h-0.5 w-12 rounded-full mt-1"
            style={{ background: config.gradient }}
          />
        </div>
      </div>

      {/* Skills */}
      {skills.map((skill, i) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} config={config} />
      ))}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section heading */}
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
          <p className="text-white/50 text-sm mb-5">
            Technologies I work with on a daily basis
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-border" />
        </motion.div>

        {/* 2×2 Grid of skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard category="frontend" skills={portfolioData.skills.frontend} />
          <SkillCard category="backend" skills={portfolioData.skills.backend} />
          <SkillCard category="database" skills={portfolioData.skills.database} />
          <SkillCard category="tools" skills={portfolioData.skills.tools} />
        </div>
      </div>
    </section>
  );
}
