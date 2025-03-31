import useMeasure from "react-use-measure";
import diego from "../../assets/diego.png";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";


const Carousel = () => {
    const images = [diego, diego, diego, diego, diego, diego, diego, diego, diego];
    const FAST_DUR = 15;
    const SLOW_DUR = 50;

    const [duration, setDuration] = useState(FAST_DUR);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);


    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);


    useEffect(() => {
        let controls
        let finPosition = -width / 2 - 1;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            })
        } else {
            controls = animate(xTranslation, [0, finPosition], {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [xTranslation, width, duration, rerender]);

    return (
        <div className="carousel overflow-hidden relative w-full h-full flex justify-center items-center">
            <motion.div
                className="inner-carousel flex"
                ref={ref} style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DUR)
                }}
                onHoverEnd={() => {
                    setMustFinish(true)
                    setDuration(FAST_DUR)
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <motion.div
                        key={index}
                        className="item w-1/4 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                    >
                        <img src={src} alt={`Slide ${index + 1}`} className="rounded-sm w-auto h-auto" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
export default Carousel;