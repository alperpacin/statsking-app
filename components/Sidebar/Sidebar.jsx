"use client";
import { createElement } from "react";
import { BsGearFill } from "react-icons/bs";
import TftLogo from "../../public/images/tft-logo.svg";
import ValorantLogo from "../../public/images/valorant-logo.svg";
import LolLogo from "../../public/images/lol-logo.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import BrandLogo from "@/public/images/brand-logo.svg";
import { useRouter } from "next/router";

const SIDEBAR_ICONS = [
  {
    logo: LolLogo,
    size: 28,
    text: "League of Legends",
    href: "/",
  },
  {
    logo: ValorantLogo,
    size: 28,
    text: "Valorant",
    href: "/valorant",
  },
  {
    logo: TftLogo,
    size: 28,
    text: "Teamfight Tactics",
    href: "/tft",
  },
  {
    logo: BsGearFill,
    size: 22,
    textKey: "settings", // Using translation key here
    href: "/settings",
  },
];

const SideBar = () => {
  const router = useRouter();
  const { t } = useTranslation("sidebar");

  return (
    <div className="fixed z-[30] bottom-0 sm:bottom-auto right-0 sm:right-auto sm:top-0 left-0 h-16 sm:h-screen w-full sm:w-16 flex flex-row sm:flex-col bg-[#2D4263] shadow-lg">
      <div className="flex flex-row sm:flex-col justify-between sm:justify-start flex-1 px-4 sm:px-0">
        <div className="hidden sm:flex">
          <BrandLogo className="text-red-400" />
        </div>
        <Divider />
        {SIDEBAR_ICONS.map((item) => (
          <SideBarIcon
            key={item.href}
            icon={createElement(item.logo, { size: item.size })}
            text={item.textKey ? t(item.textKey) : item.text}
            href={item.href}
            isActive={router.pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
};

const SideBarIcon = ({ href, icon, text = "tooltip 💡", isActive }) => (
  <Link href={href}>
    <div
      className={`sidebar-icon group ${isActive ? "bg-accent text-white" : ""}`}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
