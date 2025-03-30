import meAndDiego from "../../assets/me.png";
import meAndDiego2 from "../../assets/me2.png";
import diego from "../../assets/diego.png";
import { motion } from "framer-motion";


const Carousel = () => {
    const images = [meAndDiego, meAndDiego2, diego];

    return (
        <motion.div className="carousel overflow-hidden relative w-full">
            <motion.div
                className="inner-carousel flex"
                drag="x"
                dragConstraints={{ left: -((images.length - 1) * 300), right: 0 }}
                initial={{ x: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="item w-[100px] p-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={src} alt={`Slide ${index + 1}`} className="rounded-xl w-full h-auto" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
export default Carousel;