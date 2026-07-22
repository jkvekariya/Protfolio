import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCheckCircle, FaMobileAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 group flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-primary border border-primary/30 flex items-center gap-1">
            <FaCheckCircle /> Code Quality
          </span>
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-secondary border border-secondary/30 flex items-center gap-1">
            <FaMobileAlt /> Responsive
          </span>
        </div>
        
        {/* Category & Status */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end gap-2">
          <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-md text-xs font-bold text-white border border-white/20 uppercase tracking-wider">
            {project.category}
          </span>
          <span className={`px-3 py-1 bg-black/80 backdrop-blur-md rounded-md text-xs font-bold border ${project.status === 'Completed' ? 'text-highlight border-highlight/50' : 'text-primary border-primary/50'}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted/80 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-muted/90 group-hover:bg-primary/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-black font-semibold text-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.links.caseStudy && (
            <a
              href={project.links.caseStudy}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:text-secondary hover:border-secondary transition-all duration-300"
            >
              <FaInfoCircle size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-border"></div>
          <p className="text-muted mt-6 max-w-2xl mx-auto text-lg">
            A selection of my best work, showcasing my skills in full-stack development, UI/UX design, and complex problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
