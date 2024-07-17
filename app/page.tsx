"use client";

import { RiArrowDownDoubleFill } from "react-icons/ri";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
} from "@nextui-org/react";
import { useRef } from "react";

import Progress from "@/components/progress";

export default function Home() {
    const mainRef = useRef<HTMLElement | null>(null);

    return (
        <main ref={mainRef} className="max-w-screen overflow-hidden">
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
                        Web Developer <span className="text-white">|</span> DS &
                        ML Student
                    </h2>
                </div>
                <div
                    className="Arrow text-teal-500 z-30 text-7xl absolute top-[75vh] grid grid-cols-1 grid-rows-1 hover:cursor-pointer hover:scale-105 duration-250 ease-in-out hover:text-cyan-500"
                    role="presentation"
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
            <section className="Education h-[80vh] w-[100vw]" id="Education">
                <div>&#8203;</div>
                <h1 className="w-[100vw] ml-16 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Education
                </h1>
                <div className="flex justify-center items-center gap-5 h-[60vh] overflow-x-auto">
                    <Card className="w-[375px] h-[40vh] min-w-[325px] ml-5">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="/ensia.png"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">
                                    The National Higher School of AI
                                </p>
                                <p className="text-small text-default-500">
                                    September 2022 - July 2027
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="font-bold">Featured Projects:</p>
                            <ul className="mt-2 ml-4 list-disc">
                                <li>
                                    Electricity Management System
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/ziyad0081/DSA-ECMS"
                                    ></Link>
                                </li>
                                <li>
                                    Knowledge Academy
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/arhvnn/knowledge-academy"
                                    ></Link>
                                </li>
                                <li>
                                    Algiers Healthcare Network Optimisation
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/arhvnn/Algiers-HNO"
                                    ></Link>
                                </li>
                            </ul>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/nextui-org/nextui"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="w-[375px] h-[40vh] min-w-[325px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="DataCamp Logo"
                                height={40}
                                radius="sm"
                                src="/DataCamp.webp"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">DataCamp</p>
                                <p className="text-small text-default-500">
                                    Sep 2022 - Jul 2027
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <h2 className="font-bold">Featured Projects:</h2>
                            <ul className="ml-4 mt-2 list-disc">
                                <li>
                                    Exploring NYC Public School Test Result
                                    Scores
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/ziyad0081/DSA-ECMS"
                                    ></Link>
                                </li>
                                <li>
                                    Investigating Netflix Movies
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/ziyad0081/DSA-ECMS"
                                    ></Link>
                                </li>
                                <li>
                                    Visualizing the History of Nobel Prize
                                    Winners
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/ziyad0081/DSA-ECMS"
                                    ></Link>
                                </li>
                            </ul>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://www.datacamp.com/portfolio/arhvnnn"
                            >
                                Visit my profile on DataCamp.
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="w-[375px] h-[40vh] min-w-[325px] mr-5">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="ENSIA Logo"
                                height={40}
                                radius="sm"
                                src="/kaggle.png"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Kaggle</p>
                                <p className="text-small text-default-500">
                                    Sep 2022 - Jul 2027
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <h2 className="font-bold">Featured Projects:</h2>
                            <ul className="ml-4 mt-2 list-disc"></ul>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/nextui-org/nextui"
                            >
                                Visit my profile on Kaggle.
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <Divider className="my-4" />
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Progress target={mainRef} />
            <section
                className="Skills items-center justify-center h-[80vh] w-[100vw]"
                id="Skills"
            >
                <div>&#8203;</div>
                <h1 className="ml-6 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Skills
                </h1>
            </section>
            <Divider className="my-4" />
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section
                className="Projects items-center justify-center h-[80vh] w-[100vw]"
                id="Projects"
            >
                <div>&#8203;</div>
                <h1 className="ml-6 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                    Projects
                </h1>
            </section>
            <Divider className="my-4" />
            {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <section
                className="Contact h-[50vh] max-h-[50vh] overflow-hidden w-[100vw]"
                id="Contact"
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
                            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z" />
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
                            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z" />
                        </svg>
                        <span className="border-l-2 px-1">Email</span>
                    </button>
                </div>
                <div className="Circle relative bg-teal-500 h-[30vh] z-20 top-[25vh] w-full bg-opacity-70 rounded-[100%] blur-[100px]" />
            </section>
        </main>
    );
}
