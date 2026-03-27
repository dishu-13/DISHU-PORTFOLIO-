import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function ShutterSplash({ onComplete }: Props) {
  const [phase, setPhase] = useState<"initial" | "opening" | "done">("initial");

  useEffect(() => {
    // ⏱️ Control timings here
    const t1 = setTimeout(() => setPhase("opening"), 2500); // logo visible time
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 4500); // total duration

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* 🌌 Background Gradient + Blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 backdrop-blur-xl"></div>

          {/* 💡 Glow Light */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "opening" ? 0.4 : 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[400px] h-[400px] bg-white rounded-full blur-3xl"
          />

          {/* 🧠 Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: phase === "initial" ? 1 : 0,
              scale: phase === "initial" ? 1 : 0.6,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="z-50 text-white text-4xl md:text-5xl font-bold tracking-widest text-center"
          >
            DISHU DAKSH
          </motion.div>

          {/* 🚪 Left Shutter */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: phase === "opening" ? "-100%" : 0 }}
            transition={{
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1], // cinematic ease
            }}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl"
          />

          {/* 🚪 Right Shutter */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: phase === "opening" ? "100%" : 0 }}
            transition={{
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black via-gray-900 to-black shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
