"use client";

import { BsGearFill } from "react-icons/bs";
import TftLogo from "../../public/images/tft-logo.svg";
import ValorantLogo from "../../public/images/valorant-logo.svg";
import LolLogo from "../../public/images/lol-logo.svg";
import Logo from "../../public/images/icon.svg";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const SideBar = () => {
  const { t } = useTranslation("sidebar");

  return (
    <div className="fixed z-[30] bottom-0 sm:bottom-auto right-0 sm:right-auto sm:top-0 left-0 h-16 sm:h-screen w-full sm:w-16 flex flex-row sm:flex-col bg-[#2D4263] shadow-lg">
      <div className="flex flex-row sm:flex-col justify-between sm:justify-start flex-1 px-4 sm:px-0">
        <SideBarMainIcon icon={<Logo size="28" />} text="TargetKill" href="/" />
        <Divider />
        <SideBarIcon
          icon={<LolLogo size="28" />}
          text="League of Legends"
          href="/league-of-legends"
        />
        <SideBarIcon
          icon={<ValorantLogo size="28" />}
          text="Valorant"
          href="/valorant"
        />
        <SideBarIcon
          icon={<TftLogo size="28" />}
          text="Teamfight Tactics"
          href="/teamfight-tactics"
        />
        <SideBarIcon
          icon={<BsGearFill size="22" />}
          text={t("settings")}
          href="/settings"
        />
      </div>
    </div>
  );
};

const SideBarIcon = ({ href, icon, text = "tooltip 💡" }) => (
  <Link href={href}>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

const SideBarMainIcon = ({ href, icon, text = "tooltip 💡" }) => (
  <Link href={href}>
    <div className="sidebar-icon-main group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
