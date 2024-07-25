import Link from "next/link";

export default function Footer() {
    return (
        <section
            className="Contact h-[40vh] w-[100vw] overflow-hidden bg-gradient-to-tl from-teal-900 to-cyan-900 via-emerald-900"
            id="Contact"
        >
            <div>&#8203;</div>
            <h1 className="flex flex-col justify-center ml-6 md:ml-8 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-teal-400 to-cyan-500 bg-clip-text text-transparent mt-16">
                Contact
            </h1>
            <div className="flex justify-center items-center">
                <div className="flex items-center gap-8 mt-12 w-[50vw] justify-between">
                    <Link href="#">GitHub</Link>
                    <Link href="#">LinkedIn</Link>
                    <Link href="#">Email</Link>
                </div>
            </div>
            {/* <div className="Circle relative bg-teal-500 h-[30vh] z-20 top-[25vh] bg-opacity-70 blur-[100px]" /> */}
        </section>
    );
}
