export const HeroDescription = () => {

    const text = [
        {
            text: "Hello, my name is John Kornegay. I am a computer science graduate student at UTRGV in Edinburg, TX. As a software developer with a passion for technology, I enjoy coding, problem-solving, and web development.",
            label: "Introduction"
        },
        , {
            text: "I am currently seeking internship opportunities to gain practical experience and further develop my skills in the field.",
            label: "Internship"
        },
        {
            text: (
                <>
                    For any business opportunities, please send an email to: <a className="text-cyan-400 hover:underline hover:underline-offset-3" href="mailto:jakornegay01@gmail.com" aria-label="Email John Kornegay">jakornegay01@gmail.com</a>
                </>
            ),
            label: "Contact"
        }];

    return (
        <section id="about" className="relative my-5 h-full md:min-w-1/2 w-full px-2 items-center flex flex-col" aria-labelledby="about-heading">
            <div className="flex items-center w-full sm:w-1/2">
                <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
                <h2 id="about-heading" className="px-5 text-3xl font-light h-full text-cyan-400 text-center">
                    About
                </h2>
                <hr className="flex-grow border-t-[0.5px] border-gray-300" aria-hidden="true" />
            </div>

            {text.map((item, index) => (
                <p key={index} className="text-slate-50 text-center py-2 font-extralight text-sm/7 md:text-md/7 md:w-1/2 sm:w-3/4 w-full" aria-label={item?.label}>
                    {item?.text}
                </p>
            ))}
        </section>
    );
};
