export const About = () => (
    <section id="about" className="w-full px-4 items-center flex flex-col" aria-labelledby="about-heading">
        <div className="flex items-center w-full sm:w-1/2">
            <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
            <h2 id="about-heading" className="px-5 text-3xl font-light h-full text-cyan-400 text-center">
                About
            </h2>
            <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
        </div>
        <p className="text-slate-50 text-center py-2 font-extralight text-sm/7 md:text-lg/7 md:w-1/2 sm:w-3/4 w-full">
            Welcome to my website! My name is John Kornegay, and I am currently a computer science graduate student at UTRGV in Edinburg, TX.
            As a software developer with a passion for technology, I enjoy coding, problem-solving, being creative, and learning about new technologies.
            <br />
            For any business opportunities, please send an email to: <a className="text-cyan-400 hover:underline hover:underline-offset-3" href="mailto:jakornegay01@gmail.com" aria-label="Email John Kornegay">jakornegay01@gmail.com</a>
        </p>
    </section>
);
