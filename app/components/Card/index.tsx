import { motion } from "motion/react";


const Card = () => {

    return (
        <motion.div className="bg-white w-1/2 shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-lg font-bold mb-2">Card Title</h2>
            <p className="text-gray-600">This is a card description.</p>
        </motion.div>)
};

export default Card;
