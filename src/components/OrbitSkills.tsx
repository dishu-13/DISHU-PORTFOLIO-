import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "React",
  "Node.js",
  "Python",
  "SQL",
  "Machine Learning",
  "Data Analytics",
  "JavaScript",
  "Git",
];

export default function OrbitSkills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const xMove = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] flex items-center justify-center bg-black overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* 🧠 CENTER PHOTO */}
      <div className="relative z-10">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-2xl"
        />
      </div>

      {/* 🌌 ORBITING SKILLS */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 160;

        return (
          <motion.div
            key={index}
            style={{
              x: xMove,
              rotate: rotate,
            }}
            className="absolute text-white text-sm font-semibold"
          >
            <div
              style={{
                transform: `
                  translate(
                    ${Math.cos(angle) * radius}px,
                    ${Math.sin(angle) * radius}px
                  )
                `,
              }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg"
            >
              {skill}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
