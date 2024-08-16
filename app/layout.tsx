import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

const bricolage_grotesque = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["200", "400", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className={bricolage_grotesque.className}>
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div>
                        <Navbar/>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
