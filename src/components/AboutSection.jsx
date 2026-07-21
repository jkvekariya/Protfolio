import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2018 - 2020",
  },
  {
    degree: "Bachelor of Engineering",
    school: "State Engineering College",
    year: "2014 - 2018",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/50 glass-panel">
              <img
                src={portfolioData.personal.photo}
                alt={portfolioData.personal.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Fallback pattern if placeholder is used */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none group-hover:bg-black/10 transition-colors"></div>
            </div>
          </motion.div>

          {/* Text and Stats Column */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                I'm a <span className="text-primary">{portfolioData.personal.role}</span> based in {portfolioData.personal.contact.location}
              </h3>
              <p className="text-muted leading-relaxed text-lg">
                {portfolioData.personal.introduction} 
                <br /><br />
                My journey in web development started with a deep curiosity about how digital experiences are crafted. Over the years, I've honed my skills in modern frameworks and scalable backend architectures. I'm passionate about creating software that not only functions flawlessly but also provides an unforgettable visual experience.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {portfolioData.stats.map((stat, index) => (
                <div key={index} className="glass-panel p-6 rounded-xl text-center group hover:border-primary transition-colors duration-300">
                  <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-muted uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-col md:flex-row items-start gap-12 pt-6 border-t border-white/10">
              {/* Education Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex-1"
              >
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-secondary" /> Education
                </h4>
                <div className="space-y-6 border-l-2 border-secondary/30 ml-3 pl-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(124,58,237,0.8)]"></div>
                      <h5 className="text-lg font-semibold text-white">{edu.degree}</h5>
                      <p className="text-primary">{edu.school}</p>
                      <span className="text-sm text-muted">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center w-full md:w-auto"
              >
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg bg-transparent border border-highlight text-highlight font-bold text-lg hover:bg-highlight hover:text-black hover:shadow-[0_0_20px_rgba(0,255,179,0.8)] transition-all duration-300 w-full text-center"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
