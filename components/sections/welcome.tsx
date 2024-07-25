import { RiArrowDownDoubleFill } from "react-icons/ri";

export default function Edu() {
    return (
        <section className="Welcome flex flex-col items-center justify-center h-screen w-[100vw]">
            <div className="Circle absolute bg-teal-500 w-[80vw] h-[30vh] z-20 -top-[25vh] bg-opacity-70 rounded-[100%] blur-[100px]" />
            <video
                autoPlay
                loop
                muted
                className="absolute h-full object-cover transform z-10 w-full"
            >
                <source src={`/glitch.mp4`} type="video/mp4" />
            </video>

            <div
                className="relative z-10 grid grid-cols-1 grid-rows-1 items-center"
                role="presentation"
            >
                <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold mx-16 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent blur-sm col-start-1 col-end-1 row-start-1 row-end-1">
                    Hi! I am Abdussamad
                </h1>
                <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold mx-16 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent col-start-1 col-end-1 row-start-1 row-end-1">
                    Hi! I am Abdussamad
                </h1>
                <h2 className=" sm:text-base md:text-xl lg:text-2xl text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Web Developer <span className="text-white">|</span> DS & ML
                    Student
                </h2>
            </div>
            <div
                className="Arrow text-teal-500 z-30 text-7xl absolute top-[75vh] grid grid-cols-1 grid-rows-1 hover:cursor-pointer hover:scale-105 duration-250 ease-in-out hover:text-cyan-500"
                role="presentation"
                onClick={() => {
                    const element = document.querySelector("#Education");

                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth", // For smooth scrolling
                        });
                    }
                }}
            >
                <RiArrowDownDoubleFill className="col-start-1 col-end-1 row-start-1 row-end-1" />
                <RiArrowDownDoubleFill className="col-start-1 col-end-1 row-start-1 row-end-1 blur-xl" />
            </div>
        </section>
    );
}
