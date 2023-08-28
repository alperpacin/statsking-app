import { useState } from "react";
import Link from "next/link";
import ToggleTheme from "../ui/toggle-theme";

const navLinks = [
  { href: "/placeholder1", label: "Placeholder 1" },
  { href: "/placeholder2", label: "Placeholder 2" },
  { href: "/placeholder3", label: "Placeholder 3" },
  { href: "/placeholder4", label: "Placeholder 4" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="backdrop-blur-xl bg-opacity-20 bg-black  text-primary-color fixed top-0 w-full z-40 flex px-20 py-6">
        <div className="container mx-auto px-4 md:px-0 flex w-full justify-between">
          <nav className="flex items-center justify-between w-full mr-4">
            <span className="text-xl font-semibold">StatsKing</span>
            <ul className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-blue-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="mr-2">Menu</span>
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
          <ToggleTheme />
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 transform transition-transform ease-in-out duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button className="p-4" onClick={() => setIsMenuOpen(false)}>
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

        <ul className="space-y-4 mt-8 pl-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className="text-white text-xl hover:text-blue-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
