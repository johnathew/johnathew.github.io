import { GithubLogo, InstagramLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";
import { motion } from "motion/react";

const contactIcons = [
    { icon: <LinkedinLogo size={30} />, link: "https://www.linkedin.com/in/john-kornegay-00541411b/", label: "LinkedIn" },
    { icon: <GithubLogo size={30} />, link: "https://github.com/johnathew", label: "GitHub" },
    { icon: <InstagramLogo size={30} />, link: "https://www.instagram.com/johnathew_k/", label: "Instagram" },
    { icon: <Envelope size={30} />, link: "mailto: jakornegay01@gmail.com", label: "Email" },
];

const containerVariants = {
    hidden: { opacity: 1, },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
};

const SocialLinks = () => (
    <section id="External Links" className="w-full px-2 mt-2 items-center justify-center flex flex-col" aria-labelledby="links-heading">
        <div className="flex items-center w-full sm:w-1/2">
            <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
            <h2 id="contactjohn-heading" className="px-5 text-3xl font-light h-full text-cyan-400 text-center">
                Contact
            </h2>
            <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
        </div>
        <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-4 flex">
            {contactIcons.map((item, index) => (
                <motion.li
                    key={index}
                    variants={itemVariants}
                    className="bg-transparent m-4 text-cyan-400 rounded shadow"
                >
                    <a href={item.link} className="hover:text-slate-50" target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                        {item.icon}
                    </a>
                </motion.li>
            ))}
        </motion.ul>
    </section>
);

export default SocialLinks;