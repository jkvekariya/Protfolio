import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const socialIcons = [
    { icon: FaGithub, link: portfolioData.personal.social.github },
    { icon: FaLinkedin, link: portfolioData.personal.social.linkedin },
    { icon: FaTwitter, link: portfolioData.personal.social.twitter },
    { icon: FaInstagram, link: portfolioData.personal.social.instagram },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
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
          <div className="w-24 h-1 bg-primary mx-auto rounded-full neon-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-muted leading-relaxed mb-8">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl border border-primary/20">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-muted">{portfolioData.personal.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xl border border-secondary/20">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-muted">{portfolioData.personal.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center text-highlight text-xl border border-highlight/20">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-muted">{portfolioData.personal.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-medium mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialIcons.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-48 bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764019999999!3d37.75781495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message")}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors resize-none`}
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black font-bold text-lg py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
              
              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-highlight text-center font-medium mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
