export const Header = () => {

    return (
        <header className="w-full p-2 border-b-[0.5px] text-cyan-800 flex justify-start">
            <a href="/" aria-describedby="home" className="text-cyan-400 px-2 mx-2 border-2 hover:bg-gray-100">
                JK
            </a>
            <a href="/projects" className="text-cyan-400 mx-2 hover:underline">
                Projects
            </a>
            <a href="/about" className="text-cyan-400 mx-2 hover:underline">
                About
            </a>
            <a href="/severed" className="text-cyan-400 mx-2 hover:underline">
                Severed
            </a>
        </header>);
};
