"use client";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import React, { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <NextUINavbar className="fixed max-w-screen" isMenuOpen={menu}>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <Logo />
                        <p className="font-bold text-inherit">Abdussamad</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    <NavbarItem
                        key="#Education"
                        className="group transition duration-250 hover:cursor-pointer"
                        onClick={() => {
                            const element =
                                document.querySelector("#Education");

                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth", // For smooth scrolling
                                });
                            }
                        }}
                    >
                        Education
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 rounded-full h-0.5 bg-gradient-to-r to-teal-500 via-cyan-500 from-violet-500"></span>
                    </NavbarItem>
                    <NavbarItem
                        key="#Skills"
                        className="group transition duration-250 hover:cursor-pointer"
                        onClick={() => {
                            const element = document.querySelector("#Skills");

                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth", // For smooth scrolling
                                });
                            }
                        }}
                    >
                        Skills
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 rounded-full h-0.5 bg-gradient-to-r to-teal-500 via-cyan-500 from-violet-500"></span>
                    </NavbarItem>
                    <NavbarItem
                        key="#Projects"
                        className="group transition duration-250 hover:cursor-pointer"
                        onClick={() => {
                            const element = document.querySelector("#Projects");

                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth", // For smooth scrolling
                                });
                            }
                        }}
                    >
                        Projects
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 rounded-full h-0.5 bg-gradient-to-r to-teal-500 via-cyan-500 from-violet-500"></span>
                    </NavbarItem>
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    {/* <ThemeSwitch /> */}
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        as={Link}
                        className="text-sm font-normal"
                        color="primary"
                        isExternal
                        variant="solid"
                        onClick={() => {
                            const element = document.querySelector("#Contact");

                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth", // For smooth scrolling
                                });
                            }
                        }}
                    >
                        Reach out
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.github}
                >
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle onClick={() => setMenu(!menu)} />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem
                            key={item.label}
                            className="group transition duration-250 hover:cursor-pointer"
                            onClick={() => {
                                const element = document.querySelector(
                                    item.href
                                );
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth", // For smooth scrolling
                                    });
                                }
                                setMenu(false);
                            }}
                        >
                            {item.label}
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
