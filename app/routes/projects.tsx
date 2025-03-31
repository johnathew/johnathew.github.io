import Card from "~/components/Card";

const projects = () => {

    const content = [<Card />, <Card />, <Card />, <Card />];
    return (
        <div className="w-full h-dvh place-items-center grid grid-cols-2 grid-rows-2">
            {content.map((_, i) =>
                <div key={i} className="border-r-[0.5px] border-b-[0.5px]  w-full h-full flex justify-center items-center">
                    <Card />
                </div>
            )}

        </div>
    );
};

export default projects;
