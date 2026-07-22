import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Higher Secondary (HSC)",
    school: "Shubhlaxmi High School",
    year: "2022 – 2023",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Shree Uttar Gujarat BCA College",
    year: "2023 – 2026",
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
            className="lg:col-span-4 flex justify-center items-center"
          >
            <motion.img
              src={portfolioData.personal.photo}
              alt={portfolioData.personal.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="max-h-[500px] w-auto object-contain select-none"
            />
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
                I'm a <span className="text-primary">Full Stack Web Developer</span>
              </h3>
              <p className="text-muted leading-relaxed">
                {portfolioData.personal.introduction}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
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
