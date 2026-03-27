import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "React",
  "Node.js",
  "Python",
  "Machine Learning",
  "Data Analytics",
  "SQL",
  "JavaScript",
  "Git",
];

export default function FloatingSkills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Move left ↔ right based on scroll
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="fixed top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
    >
      {/* 🧠 CENTER IMAGE */}
      <div className="relative flex items-center justify-center">
        <img
          src="/your-photo.png"
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl"
        />

        {/* 🔵 SKILLS AROUND IMAGE */}
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 2 * Math.PI;
          const radius = 120;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute px-3 py-1 text-sm bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
