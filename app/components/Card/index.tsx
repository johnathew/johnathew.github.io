import { motion } from "motion/react";


const Card = () => {
    return (
        <motion.div className=" bg-cyan-800 w-1/2 h-1/2 shadow-lg rounded-lg p-6 hover:scale-110 hover:shadow-2xl transition duration-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-lg font-bold mb-2">Card Title</h2>
            <p className="text-black">This is a card description.</p>
        </motion.div>)
};

export default Card;
