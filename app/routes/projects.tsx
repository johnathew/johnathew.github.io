import Card from "~/components/Card";

const projects = () => {

    const content = [<Card />, <Card />, <Card />, <Card />];
    return (
        <>
            <div className="flex items-center justify-center w-full h-full p-4 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-white mt-4">under construction</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-4 md:p-8">
                {content.map((_, i) =>
                    <div key={i} className="flex items-center justify-center">
                        <Card />
                    </div>
                )}

            </div>
        </>
    );
};

export default projects;
