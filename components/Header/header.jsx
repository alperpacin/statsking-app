import { useState } from "react";
import Link from "next/link";
import ToggleTheme from "../ui/toggle-theme";

import classes from "./header.module.css";
import LolLogo from "../../public/images/lol-logo.svg";
import ValorantLogo from "../../public/images/valorant-logo.svg";
import TftLogo from "../../public/images/tft-logo.svg";
import { Separator } from "../ui/separator";
import { useRouter } from "next/router";

import { UserButton, useUser } from "@clerk/nextjs";

const navLinks = [
  {
    href: "/",
    label: "League of Legends",
    logo: <LolLogo style={{ width: "1.75rem" }} />,
  },
  {
    href: "/valorant",
    label: "Valorant",
    logo: <ValorantLogo style={{ width: "1.75rem" }} />,
  },
  {
    href: "/tft",
    label: "Teamfight Tactics",
    logo: <TftLogo style={{ width: "1.75rem" }} />,
  },
];

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isSignedIn } = useUser();

  const loginHandler = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <header className="bg-[#171a2299] text-primary-color fixed top-0 w-full z-40 flex px-4 md:px-20 py-4 h-16 text-white shadow-md shadow-[#171a2285] backdrop-blur">
        <div className="container mx-auto px-0 md:px-0 flex w-full justify-between">
          <nav className="flex items-center justify-between w-full">
            <span className="text-xl font-semibold relative">TargetKill</span>
            <ul className="hidden lg:flex space-x-4">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="transition-all  hover:bg-gray-700 hover:bg-opacity-20 p-2 rounded-md items-center flex"
                >
                  <Link href={link.href}>
                    <div className={classes["navbar-link-content"]}>
                      {link.logo}
                      <span className="text text-xs duration-500">
                        {link.label}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex lg:items-center">
              {!isSignedIn ? (
                <button
                  className="bg-primary text-white py-2 px-4 rounded-md text-sm font-semibold"
                  onClick={loginHandler}
                >
                  Login
                </button>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#171a22] transform transition-all ease-in-out duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full "
        } z-50 flex flex-col`}
      >
        <button
          className="pt-6 pr-4 flex justify-end"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transform transition-transform duration-300 hover:rotate-90"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <ul className="space-y-4 mt-8  flex-1 overflow-y-auto">
          <div className="flex flex-col flex-1">
            {navLinks.map((link) => (
              <li key={link.href} className="my-4">
                <Link href={link.href}>
                  <div className={classes["navbar-link-content"]}>
                    <span className="duration-0 transition-none">
                      {link.logo}
                    </span>
                    <span
                      className="text-white text-xl hover:text-slate-200 ml-1 transition-all duration-1000"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </ul>
        <div className="flex justify-between flex-col-reverse items-center px-4">
          <div className="flex justify-center flex-1 w-full gap-4">
            {!isSignedIn ? (
              <>
                <button className="bg-[#5a8dd3] text-accent py-3 px-4 rounded-md mb-2 w-full text-lg">
                  Login
                </button>
                <button className="border-2 border-color-primary dark:bg-secondary text-accent  py-3 px-4 rounded-md mb-2 w-full text-lg">
                  Register
                </button>
              </>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
