export const HeroDescription = () => (
    <section id="about" className="relative my-5 h-full md:min-w-1/2 w-full px-2 items-center flex flex-col" aria-labelledby="about-heading">
        <div className="flex items-center w-full sm:w-1/2">
            <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
            <h2 id="about-heading" className="px-5 text-3xl font-light h-full text-cyan-400 text-center">
                About
            </h2>
            <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
        </div>
        <p className="text-slate-50 text-center py-2 font-extralight text-sm/7 md:text-md/7 md:w-1/2 sm:w-3/4 w-full" aria-label="Introduction about John Kornegay">
            Hello, my name is John Kornegay. I am a computer science graduate student at UTRGV in Edinburg, TX.
            As a software developer with a passion for technology, I enjoy coding, problem-solving, being creative, and learning about new technologies.
        </p>
        <p className="text-slate-50 text-center py-2 font-extralight text-sm/7 md:text-md/7 md:w-1/2 sm:w-3/4 w-full" aria-label="Additional information about John Kornegay">
            In my free time, I enjoy contributing to open-source projects, exploring new programming languages, and staying updated with the latest trends in software development.
        </p>
        <p className="text-slate-50 text-center py-2 font-extralight text-sm/7 md:text-md/7 md:w-1/2 sm:w-3/4 w-full" aria-label="Contact information for John Kornegay">
            For any business opportunities, please send an email to: <a className="text-cyan-400 hover:underline hover:underline-offset-3" href="mailto:jakornegay01@gmail.com" aria-label="Email John Kornegay">jakornegay01@gmail.com</a>
        </p>
    </section>
);
