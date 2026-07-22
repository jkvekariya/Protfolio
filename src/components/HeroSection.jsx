import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialIcons = [
  { icon: FaGithub,   link: portfolioData.personal.social.github },
  { icon: FaLinkedin, link: portfolioData.personal.social.linkedin },
  { icon: FaInstagram,link: portfolioData.personal.social.instagram },
  { icon: FaEnvelope, link: `mailto:${portfolioData.personal.contact.email}` },
];

const TITLES = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];

function TypingText() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // All mutable loop state lives in refs — never stale
  const titleIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(id);
  }, []);

  // Typing loop — runs once, uses refs for all loop state
  useEffect(() => {
    let charIndex = 0;

    const tick = () => {
      const current = TITLES[titleIndexRef.current];

      if (!isDeletingRef.current) {
        // Type one character
        charIndex += 1;
        setDisplayText(current.slice(0, charIndex));

        if (charIndex === current.length) {
          // Finished typing — pause then start deleting
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            timeoutRef.current = setTimeout(tick, 45);
          }, 1800);
        } else {
          timeoutRef.current = setTimeout(tick, 90);
        }
      } else {
        // Delete one character
        charIndex -= 1;
        setDisplayText(current.slice(0, charIndex));

        if (charIndex === 0) {
          // Finished deleting — move to next title
          isDeletingRef.current = false;
          titleIndexRef.current = (titleIndexRef.current + 1) % TITLES.length;
          timeoutRef.current = setTimeout(tick, 300);
        } else {
          timeoutRef.current = setTimeout(tick, 50);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 500);
    return () => clearTimeout(timeoutRef.current);
  }, []); // runs only once on mount

  return (
    <div className="flex items-center justify-center h-8 md:h-10 font-heading">
      <span className="text-xl md:text-2xl font-semibold text-white tracking-wide">
        {displayText}
      </span>
      <span
        className="ml-0.5 text-xl md:text-2xl font-light text-primary"
        style={{ opacity: showCursor ? 1 : 0 }}
      >
        |
      </span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-36 pb-16 relative overflow-hidden font-heading">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center z-10 relative max-w-4xl">
        {/* Welcome Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-xs md:text-sm tracking-widest mb-3 uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-gradient">{portfolioData.personal.name}</span>
        </motion.h1>

        {/* Dynamic Typing Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <TypingText />
        </motion.div>

        {/* 2 to 3 lines about Full Stack Development */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base text-muted/90 max-w-xl leading-relaxed mb-10 font-sans"
        >
          I specialize in building complete, end-to-end web applications. From designing visually stunning, highly interactive frontends to engineering secure, high-performance APIs and databases, I bring digital concepts to life with clean and efficient code.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-row justify-center items-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-primary text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-6 mt-16"
        >
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary hover:scale-125 transition-all duration-300"
              >
                <Icon size={26} />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative grid background & colorful background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[130px] pointer-events-none" />
    </section>
  );
}
