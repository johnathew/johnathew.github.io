import { useMemo } from "react";

const Sever = () => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const generateGridNumbers = () =>
        Array.from({ length: 25 }, () =>
            digits[Math.floor(Math.random() * digits.length)]
        );

    const scaryNumbers = useMemo(() => {
        return Array.from({ length: 10 }).map(() => generateGridNumbers().join(''));
    }, []);

    return (
        <div className="text-cyan-400 h-full w-full">
            {scaryNumbers.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap justify-around md:text-center">
                    {row.split('').map((num, numIndex) => (
                        <p
                            key={numIndex}
                            className="transition text-3xl md:text-3xl p-1 md:p-3 duration-700 ease-in-out hover:scale-170 hover:-translate-y-1"
                        >
                            {num}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Sever;
