import { motion } from "motion/react";
import diego from "../../assets/diego.png"

const Card = () => {
    return (
        <motion.div
            className="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}>
            <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
                <div
                    className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md"
                >
                    <img
                        className="rounded-t-xl w-full h-64 shadow-sm bg-cover"
                        src={diego}
                        alt="Diego"
                        loading="lazy"
                        width={500}
                        height={500}
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // prevents looping
                            target.src = "https://via.placeholder.com/500";
                        }
                        }
                    ></img>

                    <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                        <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                            Project Name
                        </h1>
                        <p className="text-sm">
                            Project Description Where I explain the project and what it does. I can
                            add more text here to make it look better. I can add more text here to
                            make it look better. I can add more text here to make it look better.
                        </p>
                        <div className="flex mt-4">
                            <button
                                className="transition-all duration-100 text-center p-2 rounded-md text-white w-1/2 bg-gradient-to-r from-cyan-700 to-cyan-800 hover:shadow-md hover:from-cyan-400 hover:to-cyan-500 hover:text-black"
                            >
                                Live Demo
                            </button>
                            <div className="flex flex-col ml-4 w-1/2">
                                <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                                    Sub Header
                                </h2>
                                <button
                                    className="transition-all duration-100 text-center p-2 rounded-md text-white bg-gradient-to-r from-slate-700 to-slate-800 hover:shadow-md hover:from-slate-700 hover:to-slate-600"
                                >
                                    GH link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>)
};

export default Card;
