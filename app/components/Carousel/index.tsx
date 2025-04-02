import useMeasure from "react-use-measure";
import tailwindSVG from "../../assets/icons/tailwind.svg"
import photoshop from "../../assets/icons/photoshop.svg"
import typescriptSVG from "../../assets/icons/typescript.svg"
import githubSVG from "../../assets/icons/github.svg"
import pythonSVG from "../../assets/icons/python.svg"
import rrSVG from "../../assets/icons/reactRouter.svg"
import react from "../../assets/icons/react2.svg"
import docker from "../../assets/icons/docker.svg"
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";


const Carousel = () => {
    const images = [tailwindSVG, photoshop, typescriptSVG, githubSVG, pythonSVG, rrSVG, react, docker];
    const FAST_DUR = 15;
    const SLOW_DUR = 90;

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
    // TODO: Add tooltip on hover
    return (
        <div className="relative mt-2 carousel w-full overflow-clip md:w-1/2 md:h-auto flex items-center [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div
                className="flex"
                ref={ref}
                style={{ x: xTranslation }}
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
                    <motion.div key={index} whileHover={{ scale: 1.2 }} className="mx-2 mt-2 flex items-center justify-center">
                        <img src={src} alt={`Slide ${index + 1}`} className="relative p-2 border-2 border-slate-900 hover:border-cyan-400 bg-slate-300 rounded-sm min-w-[70px] px-5 mx-2 mb-2 overflow-hidden h-auto" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
export default Carousel;