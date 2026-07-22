import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ─────────────────────────────────────────────────────────
// Steps to activate:
// 1. Sign up free at https://www.emailjs.com
// 2. Create a Gmail service → copy the Service ID below
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Copy the Template ID below
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "AbCdEfGhIjKlMnOp"
// ────────────────────────────────────────────────────────────────────────────

const socialIcons = [
  { icon: FaGithub,   link: portfolioData.personal.social.github,    label: "GitHub"    },
  { icon: FaLinkedin, link: portfolioData.personal.social.linkedin,  label: "LinkedIn"  },
  { icon: FaInstagram,link: portfolioData.personal.social.instagram, label: "Instagram" },
];

export default function ContactSection() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = formRef.current;
    const name    = form.from_name.value.trim();
    const email   = form.from_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 focus:border-primary rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30";

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-border" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-muted leading-relaxed">
                I'm currently available to take on new projects. Feel free to send
                me a message about anything you want to collaborate on — I'll get
                back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl border border-primary/20 shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Phone</h4>
                  <a href={`tel:${portfolioData.personal.contact.phone}`} className="text-muted hover:text-primary transition-colors">
                    {portfolioData.personal.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xl border border-secondary/20 shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Email</h4>
                  <a href={`mailto:${portfolioData.personal.contact.email}`} className="text-muted hover:text-primary transition-colors break-all">
                    {portfolioData.personal.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center text-highlight text-xl border border-highlight/20 shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Address</h4>
                  <p className="text-muted">{portfolioData.personal.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-white font-medium mb-4 text-sm tracking-wider uppercase">Follow Me</h4>
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map — Surat, Gujarat */}
            <div className="w-full h-48 rounded-2xl border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.63498015613!2d72.7710577!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-muted mb-2">
                    Your Name
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    minLength={2}
                    className={inputClass}
                    placeholder="Jay Vekariya"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-muted mb-2">
                    Your Email
                  </label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="jay@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength={5}
                  className={inputClass}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  minLength={10}
                  className={`${inputClass} resize-none`}
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-highlight text-center font-medium"
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium text-sm"
                >
                  ❌ Please fill all fields correctly, or set up EmailJS keys to enable sending.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
