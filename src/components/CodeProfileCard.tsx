import { motion } from 'framer-motion';

export default function CodeProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-2xl border border-border/30 bg-card/70 backdrop-blur-xl overflow-hidden shadow-lg glass-shine"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/50">
        <span className="w-3 h-3 rounded-full bg-destructive/70" />
        <span className="w-3 h-3 rounded-full bg-accent/70" />
        <span className="w-3 h-3 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs text-muted-foreground font-light tracking-wide">
          dishu.js
        </span>
      </div>

      {/* Code body */}
      <pre className="p-4 md:p-5 text-[12px] md:text-[13px] leading-relaxed font-light overflow-x-auto">
        <code>
          <span className="text-accent">const</span>{' '}
          <span className="text-foreground">dishu</span>{' '}
          <span className="text-muted-foreground">=</span>{' '}
          <span className="text-muted-foreground">{'{'}</span>
          {'\n  '}
          <span className="text-primary">role</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-accent">"Data Analyst"</span>
          <span className="text-muted-foreground">,</span>
          {'\n  '}
          <span className="text-primary">languages</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-muted-foreground">[</span>
          <span className="text-accent">"Python"</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-accent">"SQL"</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-accent">"DAX"</span>
          <span className="text-muted-foreground">]</span>
          <span className="text-muted-foreground">,</span>
          {'\n  '}
          <span className="text-primary">tools</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-muted-foreground">[</span>
          <span className="text-accent">"Power BI"</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-accent">"Excel"</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-accent">"Pandas"</span>
          <span className="text-muted-foreground">]</span>
          <span className="text-muted-foreground">,</span>
          {'\n  '}
          <span className="text-primary">certifiedBy</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-muted-foreground">[</span>
          <span className="text-accent">"Google"</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-accent">"Microsoft"</span>
          <span className="text-muted-foreground">]</span>
          <span className="text-muted-foreground">,</span>
          {'\n  '}
          <span className="text-primary">currentFocus</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-accent">"Machine Learning"</span>
          <span className="text-muted-foreground">,</span>
          {'\n  '}
          <span className="text-primary">openToWork</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-foreground">true</span>
          <span className="text-muted-foreground">,</span>
          {'\n'}
          <span className="text-muted-foreground">{'};'}</span>
        </code>
      </pre>
    </motion.div>
  );
}
