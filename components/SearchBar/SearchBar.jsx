import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import PLATFORM_LIST from "@/public/json/platform-api-routes.js";
import GAME_LIST from "@/public/json/game-platforms";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";

const SearchBar = ({ icon }) => {
  const inputRef = useRef(null);
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const [activeTab, setActiveTab] = useState("recent");
  const { register, handleSubmit } = useForm();
  const [selectedRegion, setSelectedRegion] = useState();

  const handleFocus = () => {
    setFocused(true);
  };

  //for listening outside clicks
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !ref?.current?.contains(e.target) &&
        !inputRef?.current?.contains(e.target)
      ) {
        setFocused(false);
      }
    };

    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full relative z-[2190]"
    >
      <div
        ref={inputRef}
        className={`flex items-center space-x-0  border-gray-200 bg-gray-100 dark:bg-gray-100 transition-all duration-500 ${
          !focused
            ? "rounded-md border-[1px]"
            : "rounded-t-md border-[1px] border-gray-200 "
        }`}
      >
        <div className="w-12 sm:w-24 h-full shrink-0 bg-gray-100 border-r-[1px] border-r-gray-200">
          <Dropdown items={GAME_LIST} />
        </div>

        <div className="px-4 w-full">
          <Input
            type="text"
            className="min-w-full border-0 shadow-none placeholder:text-[#171a2250] text-[#171a22] py-2 text-lg"
            placeholder="Search for a player (ex. John#EUW1)"
            {...register("search", { minLength: 1 })}
            onFocus={handleFocus}
          />
        </div>

        <div className="flex justify-center items-center space-x-0 pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-6 sm:h-6 text-[#171a22]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input type="submit" className="hidden" />
      </div>
      <div
        ref={ref}
        onFocus={() => setFocused(true)}
        className={`${
          focused
            ? "h-48 sm:h-64 translate-y-0 opacity-100"
            : "h-0 translate-y--2 opacity-0"
        } overflow-hidden transition-all duration-500 bg-slate-100 rounded-b-sm absolute w-full top-full flex flex-col lg:flex-row`}
      >
        <div className="w-full lg:w-24 h-10 lg:h-full bg-gray-100 py-6 flex lg:block border-b-[1px] border-b-gray-200 lg:border-b-0 lg:border-r-[1px] lg:border-r-gray-200">
          {/* Updated Button for 'Recent' */}
          <button
            onClick={() => setActiveTab("recent")}
            className={`flex justify-center lg:justify-start items-center w-full mb-8 py-2 ${
              activeTab === "recent" ? "bg-gray-300" : ""
            }`}
          >
            <AiOutlineClockCircle className="text-[24px] text-primary mr-1" />
            <span className="text-xs text-primary hidden md:inline-block">
              Recent
            </span>
          </button>

          {/* Updated Button for 'Favorites' */}
          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex justify-center lg:justify-start items-center w-full ${
              activeTab === "favorites" ? "bg-gray-300" : ""
            }`}
          >
            <AiOutlineStar className="text-[24px] text-primary" />
            <span className="text-xs text-primary hidden md:inline-block">
              Favorites
            </span>
          </button>
        </div>

        {/* Step 3: Conditional Rendering */}
        <div className="flex-1 bg-gray-100 py-4">
          {activeTab === "recent" && (
            <div>
              {/* Your content for the 'Recent' tab */}
              Recent content goes here.
            </div>
          )}
          {activeTab === "favorites" && (
            <div>
              {/* Your content for the 'Favorites' tab */}
              Favorites content goes here.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
