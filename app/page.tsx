"use client";

import { useRef } from "react";
import { Divider } from "@nextui-org/react";
import Progress from "@/components/progress";
import Welcome from "@/components/sections/welcome";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Footer from "@/components/footer";
import Projects from "@/components/sections/projects";

export default function Home() {
    const mainRef = useRef<HTMLElement | null>(null);

    return (
        <main ref={mainRef}>
            <Progress target={mainRef} />
            <Welcome />
            <Education />
            <Divider className="my-4" />
            <Skills />
            <Divider className="my-4" />
            <Projects />
            <Divider className="mt-4" />
            <Footer />
        </main>
    );
}
