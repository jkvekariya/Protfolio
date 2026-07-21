import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Hero3DScene from "./Hero3DScene";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialIcons = [
  { icon: FaGithub, link: portfolioData.personal.social.github },
  { icon: FaLinkedin, link: portfolioData.personal.social.linkedin },
  { icon: FaTwitter, link: portfolioData.personal.social.twitter },
  { icon: FaInstagram, link: portfolioData.personal.social.instagram },
  { icon: FaEnvelope, link: `mailto:${portfolioData.personal.contact.email}` },
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % portfolioData.personal.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono text-lg md:text-xl tracking-wider mb-2">
              Welcome to my developer space
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-gradient">{portfolioData.personal.name.split(' ')[0]}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 md:h-16"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-5xl font-semibold text-muted neon-text"
              >
                {portfolioData.personal.titles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted/80 max-w-lg leading-relaxed"
          >
            {portfolioData.personal.introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-md bg-primary text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-md border-2 border-secondary text-secondary font-bold text-lg hover:bg-secondary hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-6 mt-12"
          >
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-highlight hover:scale-125 transition-all duration-300"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Content - 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full min-h-[400px] lg:min-h-[600px] z-10 relative hidden md:block"
        >
          <Hero3DScene />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
