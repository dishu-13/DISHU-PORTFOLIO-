import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await fetch('/', { method: 'POST', body: new FormData(form) });
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
    <section id="contact" className="py-24 md:py-32 px-4 relative">
      <div className="section-divider mb-24" />

      {/* Big CTA Block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl text-center mb-20"
        ref={ref}
      >
        <div className="card-glass-strong p-10 md:p-16 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[100px]"
               style={{ background: 'hsl(263 70% 58% / 0.15)' }} />
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 relative">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative">
            Have a project in mind or want to discuss data analytics opportunities? I'd love to hear from you.
          </p>
          <a href="mailto:dishudaksh44@gmail.com"
             className="btn-primary inline-flex items-center gap-2 relative">
            Get In Touch <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="font-mono text-sm text-primary/70 tracking-widest uppercase mb-3 block">Contact</span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                Open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 card-glow glass-shine group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                       style={{ background: 'linear-gradient(135deg, hsl(263 70% 58% / 0.2), hsl(190 80% 50% / 0.15))' }}>
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 card-glass-strong glass-shine"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
            <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

            <div className="space-y-5">
              {[
                { id: 'name', type: 'text', label: 'Your Name', placeholder: 'John Doe' },
                { id: 'email', type: 'email', label: 'Your Email', placeholder: 'john@example.com' },
              ].map(({ id, type, label, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2 font-display">{label}</label>
                  <input
                    type={type} id={id} name={id} required
                    value={formData[id as keyof typeof formData]}
                    onChange={e => setFormData({ ...formData, [id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-body"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-display">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none font-body"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
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