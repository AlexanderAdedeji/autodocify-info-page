import React from "react";
import ModeToggle from "./ModeToggle";
import { MobileNavFragment } from "./MobileNavFragment";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { GithubIcon } from "lucide-react";
import { navbarLinksList, NavProps } from "@/config/nav";

const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 font-bold text-xl flex items-center">
              <span className="text-blue-600">Auto</span>
              <span>Docify</span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />
            <MobileNavFragment />
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {navbarLinksList.map((route: NavProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Link
              href="https://github.com/grayStone-Inc/autodocify-cli"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GithubIcon className="mr-2 w-5 h-5" />
              Get Started
            </Link>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
