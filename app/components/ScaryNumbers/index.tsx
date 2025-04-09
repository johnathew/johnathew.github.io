import { useMemo } from "react";
import { motion } from "motion/react"

const ScaryNumbers = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const generateGridNumbers = () =>
        Array.from({ length: 20 }, () =>
            digits[Math.floor(Math.random() * digits.length)]
        );

    const scaryNumbers = useMemo(() => {
        return Array.from({ length: 20 }).map(() => generateGridNumbers().join(''));
    }, []);

    const content = scaryNumbers.map((row, rowIndex) => (
        <motion.ul key={rowIndex} className="flex flex-wrap justify-around md:text-center">
            {row.split('').map((num, numIndex) => (
                Math.random() > 0.5 ? (
                    <motion.li
                        animate={{ x: [0, 1.5, 0] }}
                        transition={{
                            duration: 2,
                            ease: ["easeIn", "easeOut"],
                            repeat: Infinity,
                            times: [0, 1],
                        }}
                        key={numIndex}
                        className="text-md md:text-2xl p-1 md:p-3 duration-700 cursor-pointer hover:scale-170 hover:-translate-y-1"
                    >
                        {num}
                    </motion.li>
                ) : (
                    <li
                        key={numIndex}
                        className="text-md md:text-2xl p-1 md:p-3 duration-700 cursor-pointer hover:scale-170 hover:-translate-y-1"
                    >
                        {num}
                    </li>
                )
            ))}
        </motion.ul>
    ))
    return (
        <div className="text-cyan-400 h-full w-full">
            {content}
        </div>
    );
};

export default ScaryNumbers;
