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
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
    GithubIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
} from "@/components/icons";

export const Navbar = () => {
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
        />
    );

    return (
        <NextUINavbar
            className="fixed min-w-screen w-screen max-w-screen"
            maxWidth="xl"
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <Logo />
                        <p className="font-bold text-inherit">C!J£T</p>
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
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 rounded-full h-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500"></span>
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
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 rounded-full h-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500"></span>
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
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 rounded-full h-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500"></span>
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
                        href="/"
                        isExternal
                        startContent={
                            <HeartFilledIcon className="text-danger" />
                        }
                        variant="solid"
                    >
                        Contact
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
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index ===
                                            siteConfig.navMenuItems.length - 1
                                          ? "danger"
                                          : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
