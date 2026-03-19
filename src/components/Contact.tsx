import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('/', { method: 'POST', body: data });
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dishudaksh44@gmail.com', href: 'mailto:dishudaksh44@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7500700277', href: 'tel:+917500700277' },
    { icon: MapPin, label: 'Location', value: 'Rudrapur, Uttarakhand, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">( Contact )</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Let's <span className="text-primary">Talk</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss data analytics opportunities? I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 border border-border"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
            <p className="hidden">
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
