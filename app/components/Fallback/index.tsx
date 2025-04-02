import { motion } from "motion/react"

function Loading() {
    const dotVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay"
        >
            <motion.div
                animate="pulse"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                className="container"
            >
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
            </motion.div>
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .overlay {
                position: fixed;
                top: 0;
                left: 0;
                right:0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            }

            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                gap: 20px;
            }

            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: oklch(78.9% 0.154 211.53);
                will-change: transform;
            }
            `}
        </style>
    )
}

export default Loading
