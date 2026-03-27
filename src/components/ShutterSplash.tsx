import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function ShutterSplash({ onComplete }: Props) {
  const [phase, setPhase] = useState<"initial" | "opening" | "done">("initial");

  useEffect(() => {
    // ⏱️ Timing control
    const t1 = setTimeout(() => setPhase("opening"), 2500); // logo time
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
          {/* 🌌 Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 backdrop-blur-xl"></div>

          {/* 💡 Glow behind logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "initial" ? 0.5 : 0 }}
            transition={{ duration: 1 }}
            className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl"
          />

          {/* 🧠 LOGO ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: phase === "initial" ? 1 : 0,
              scale: phase === "initial" ? 1 : 0.5,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="z-50 flex items-center justify-center"
          >
            <img
              src="/logo.png"
              alt="Dishu Daksh Logo"
              className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            />
          </motion.div>

          {/* 🚪 LEFT SHUTTER */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: phase === "opening" ? "-100%" : 0 }}
            transition={{
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl"
          />

          {/* 🚪 RIGHT SHUTTER */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: phase === "opening" ? "100%" : 0 }}
            transition={{
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black via-gray-900 to-black shadow-2xl"
          />

          {/* ✨ LIGHT SWEEP EFFECT */}
          {phase === "opening" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1.5 }}
              transition={{ duration: 1.2 }}
              className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
