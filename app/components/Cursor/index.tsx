import { motion } from "framer-motion";

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

export default function CursorBlinker() {
    return (
        <motion.span
            variants={cursorVariants}
            animate="blinking"
            className="inline-block h-5 w-[4px] translate-y-1 bg-cyan-400"
        />
    );
}
