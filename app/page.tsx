"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { Divider } from "@nextui-org/react";
import Progress from "@/components/progress";
import { useRef } from "react";

export default function Home() {
    const mainRef = useRef<HTMLElement | null>(null);
    return (
        <main ref={mainRef}>
            <section className="Welcome flex flex-col items-center justify-center h-screen w-screen">
                <div className="Circle absolute bg-teal-500 w-[80vw] h-[30vh] z-20 -top-[25vh] bg-opacity-70 rounded-[100%] blur-[100px]" />
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute h-full w-full object-cover transform z-0"
                >
                    <source src={`/glitch.mov`} type="video/mp4" />
                </video>

                <div className="relative z-10 grid grid-cols-1 grid-rows-1 items-center">
                    <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold mx-16 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent blur-sm col-start-1 col-end-1 row-start-1 row-end-1">
                        Hi! I am Abdussamad
                    </h1>
                    <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold mx-16 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent col-start-1 col-end-1 row-start-1 row-end-1">
                        Hi! I am Abdussamad
                    </h1>
                    <h2 className=" sm:text-base md:text-xl lg:text-2xl text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Web Developer <span className="text-white">|</span> DS &
                        ML Student
                    </h2>
                </div>
                <div
                    className="Arrow text-teal-500 z-30 text-7xl absolute top-[75vh] grid grid-cols-1 grid-rows-1 hover:cursor-pointer hover:scale-105 duration-250 ease-in-out hover:text-cyan-500"
                    onClick={() => {
                        const element = document.querySelector(".Education");
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
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section id="Education" className="Education h-[80vh] w-[100vw]">
                <div>&#8203;</div>
                <h1 className="w-[100vw] ml-16 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Education
                </h1>
                <div className="flex justify-center items-center h-[60vh] mx-5">
                    <div className=" gap-8 carousel rounded-box carousel-center space-x-4">
                        {/* <ENSIA />
                        <DataCamp />
                        <Kaggle /> */}
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Progress target={mainRef} />
            <section
                id="Skills"
                className="Skills items-center justify-center h-[80vh] w-[100vw]"
            >
                <div>&#8203;</div>
                <h1 className="ml-6 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Skills
                </h1>
            </section>
            <Divider className="my-4" />
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section
                id="Projects"
                className="Projects items-center justify-center h-[80vh] w-[100vw]"
            >
                <div>&#8203;</div>
                <h1 className="ml-6 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Projects
                </h1>
            </section>
            <Divider className="my-4" />
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section
                id="Contact"
                className="Contact h-[50vh] max-h-[50vh] overflow-hidden w-[100vw]"
            >
                <div>&#8203;</div>
                <h1 className="flex flex-col justify-center ml-6 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Contact
                </h1>
                <div className="flex justify-center items-center gap-8 mt-12">
                    <button className="group hover:bg-neutral-900 relative bg-[#171515] rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                        <svg
                            className="w-8 h-8 fill-neutral-50"
                            height="100"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 100 100"
                            width="100"
                            x="0"
                            xmlns="http://www.w3.org/2000/svg"
                            y="0"
                        >
                            <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                        </svg>
                        <span className="border-l-2 px-1">GitHub</span>
                    </button>
                    <button className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                        <svg
                            className="w-8 h-8 fill-neutral-50"
                            height="100"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 100 100"
                            width="100"
                            x="0"
                            xmlns="http://www.w3.org/2000/svg"
                            y="0"
                        >
                            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                        </svg>
                        <span className="border-l-2 px-1">LinkedIn</span>
                    </button>
                    <button className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                        <svg
                            className="w-8 h-8 fill-neutral-50"
                            height="100"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 100 100"
                            width="100"
                            x="0"
                            xmlns="http://www.w3.org/2000/svg"
                            y="0"
                        >
                            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                        </svg>
                        <span className="border-l-2 px-1">Email</span>
                    </button>
                </div>
                <div className="Circle relative bg-teal-500 h-[30vh] z-20 top-[25vh] w-full bg-opacity-70 rounded-[100%] blur-[100px]" />
            </section>
        </main>
    );
}
