import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Dishu Daksh. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
}