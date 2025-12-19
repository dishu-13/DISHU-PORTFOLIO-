import { motion } from 'framer-motion';
export default function Footer() {
  return <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6
      }} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Dishu Daksh. All rights reserved.
          </p>
          
          
        </motion.div>
      </div>
    </footer>;
}