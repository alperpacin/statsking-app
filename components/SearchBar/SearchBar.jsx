import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";

const SearchBar = ({ icon }) => {
  const inputRef = useRef(null);
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const { register, handleSubmit } = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
      <div
        ref={inputRef}
        className={`flex items-center space-x-0  border-gray-200 bg-gray-100 dark:bg-gray-100 transition-all duration-500 ${
          !focused
            ? "rounded-md border-[1px]"
            : "rounded-t-md border-[1px] border-gray-200 "
        }`}
      >
        <div className="px-2 sm:px-4 w-12 xs:w-16 sm:w-16 md:w-24 shrink-0 flex justify-center bg-gray-100">
          <div className="w-10 h-10 relative">
            <Image
              src={`/images/${icon}-icon.png`}
              alt={`${icon} logo`}
              fill
              sizes="100vw"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="inline-block h-[4rem] min-h-[1em] w-0.5 self-stretch bg-gray-200 opacity-100 dark:opacity-50"></div>

        <div className="px-4 w-full">
          <Input
            type="text"
            className="min-w-full border-0 shadow-none placeholder:text-[#171a2250] text-[#171a22]"
            placeholder="Search for a player (ex. John#EUW1)"
            {...register("search", { minLength: 1 })}
            onFocus={handleFocus}
          />
        </div>

        <div className="flex justify-center items-center space-x-0 px-4">
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
        <div className="md:pl-2 w-full lg:w-24  h-10 bg-gray-100 py-6 flex lg:block border-b-[1px]">
          <button className="flex justify-center lg:justify-start items-center w-full mb-8">
            <AiOutlineClockCircle className="text-[24px] text-primary mr-1" />
            <span className="text-xs text-primary hidden md:inline-block">
              Recent
            </span>
          </button>

          <button className="flex justify-center lg:justify-start items-center w-full">
            <AiOutlineStar className="text-[24px] text-primary" />
            <span className="text-xs text-primary hidden md:inline-block">
              Favorites
            </span>
          </button>
        </div>
        <div className=" h-full min-h-[1em] w-0.5 self-stretch bg-gray-200 opacity-100 dark:opacity-50 hidden lg:inline"></div>
        <div className="righxt">x</div>
      </div>
    </form>
  );
};

export default SearchBar;
