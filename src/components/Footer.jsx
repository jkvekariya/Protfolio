import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialIcons = [
    { icon: FaGithub, link: portfolioData.personal.social.github },
    { icon: FaLinkedin, link: portfolioData.personal.social.linkedin },
    { icon: FaTwitter, link: portfolioData.personal.social.twitter },
    { icon: FaInstagram, link: portfolioData.personal.social.instagram },
  ];

  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/10 glass-panel mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Intro */}
          <div>
            <a href="#home" className="inline-block mb-4 text-2xl font-bold font-mono tracking-tighter">
              <span className="text-white">&lt;</span>
              <span className="text-primary">{portfolioData.personal.name.split(' ')[0]}</span>
              <span className="text-secondary">/&gt;</span>
            </a>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Building modern and high-performance digital experiences with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Experience', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialIcons.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary/20 hover:text-primary hover:border-primary border border-transparent transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-muted text-sm mt-6">
              Email: <a href={`mailto:${portfolioData.personal.contact.email}`} className="text-white hover:text-primary transition-colors">{portfolioData.personal.contact.email}</a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-300 group"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
