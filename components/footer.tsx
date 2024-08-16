"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
    return (
        <section
            className="Contact flex flex-col items-center justify-between h-[50vh] md:h-[60vh] w-[100vw] bg-gradient-to-tl from-teal-800 to-cyan-800 via-emerald-800 bg-opacity-25"
            id="Contact"
        >
            <div className="flex flex-col mt-16 mr-auto">
                <h1 className="ml-16 md:ml-24 text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Reach me out <br />
                    by an email
                </h1>
                <Button
                    className="ml-16 md:ml-24 md:w-[250px] mt-12"
                    size="lg"
                    color="primary"
                    variant="shadow"
                >
                    a.arhun@proton.me
                </Button>
            </div>
            <div className="flex flex-col sm:flex-row mb-12 justify-between w-[80vw] text-sm">
                <h1 className="">Abdessamed ZETRONI © 2024.</h1>
                <div className="flex items-center gap-8">
                    <Link href="https://github.com/arhvnn">GitHub</Link>
                    <Link href="http://linkedin.com/arhvnn">LinkedIn</Link>
                    <Link href="https://kaggle.com/arhvnnn">Kaggle</Link>
                </div>
            </div>
        </section>
    );
}
