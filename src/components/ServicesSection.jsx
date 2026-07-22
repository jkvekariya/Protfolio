import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaReact, FaServer, FaCode, FaNetworkWired, FaDatabase, FaPaintBrush, FaBolt, FaRocket, FaLaptopCode, FaShieldAlt } from "react-icons/fa";

const iconMap = {
  FaReact,
  FaServer,
  FaCode,
  FaNetworkWired,
  FaDatabase,
  FaPaintBrush,
  FaBolt,
  FaRocket,
  FaLaptopCode,
  FaShieldAlt,
};

// 3D Tilt Card Component
function TiltCard({ service, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = iconMap[service.icon] || FaCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-panel p-8 rounded-2xl h-full border border-white/10 hover:border-primary/50 transition-colors duration-300 group cursor-pointer relative overflow-hidden"
      >
        {/* Glow behind the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-3xl text-primary drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full neon-border shadow-[0_0_10px_rgba(124,58,237,0.8)] border-secondary"></div>
          <p className="text-muted mt-6 max-w-2xl mx-auto text-lg">
            I offer a wide range of premium software development services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.services.map((service, index) => (
            <TiltCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
