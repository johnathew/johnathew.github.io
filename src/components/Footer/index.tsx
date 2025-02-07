import { Social } from "../Social"

export const Footer = () => {
    return (
        <footer className="text-cyan-400 w-full flex sm:text-xs justify-center align-middle items-center" role="content-info" aria-label="Footer">
            <div className="flex my-10 flex-col items-center justify-center w-full m-4 sm:mx-0 sm:w-1/2">
                <Social />
                <p className="text-xs opacity-90">© 2025 John Kornegay</p>
            </div>
        </footer>
    );
};
