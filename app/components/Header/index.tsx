import { Link } from "react-router";

export const Header = () => {

    return (
        <header className="w-full p-2 border-b-[0.5px] text-cyan-800 bg-slate-950 flex justify-start">
            <Link to="/" aria-describedby="home" className="text-cyan-400 px-2 mx-2 border-2 rounded-sm hover:bg-cyan-400 hover:text-slate-900 hover:shadow-md">
                JK
            </Link>
            <Link to="/projects" className="text-cyan-400 mx-2 hover:underline">
                Projects
            </Link>
            <Link to="/gallery" className="text-cyan-400 mx-2 hover:underline">
                Gallery
            </Link>
            <Link to="/severed" className="text-cyan-400 mx-2 hover:underline">
                Severed
            </Link>
        </header>);
};
