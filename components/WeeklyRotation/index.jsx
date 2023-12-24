import { getChampionImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WeeklyRotationComponent({ freeTierChamps, t }) {
  return (
    <article>
      <h2 className="text-2xl camelcase font-bold mb-2">
        {t("weekly-rotation")}
      </h2>
      <div className="flex flex-wrap transition-all duration-100 justify-start">
        {freeTierChamps ? (
          freeTierChamps.map((champ) => (
            <Link
              className="outline-none overflow-hidden relative m-1"
              href={{
                pathname: `/champions/${champ.name.toLowerCase()}`,
                query: {
                  data: JSON.stringify(champ),
                },
              }}
              as={`/champions/${champ.name.toLowerCase()}`}
            >
              <div className="w-12 h-12 group flex items-center overflow-hidden justify-center relative  transition-all duration-100 shadow-sm shadow-black/30">
                <Image
                  fill
                  className="shadow-sm shadow-black/30 group-hover:scale-110 transition-transform duration-50"
                  src={getChampionImageUrl(champ.id)}
                  alt={`${champ.id}'s loading image`}
                  objectFit="cover"
                  sizes="(min-width: 60em) 100vw,
          (min-width: 28em) 100vw,
          100vw"
                  quality={80}
                />
              </div>
            </Link>
          ))
        ) : (
          <div
            role="status"
            class="animate-pulse flex group items-center flex-wrap w-full"
          >
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>
            <div className="w-12 h-12 m-1 bg-gray-800 rounded-sm dark:bg-gray-700"></div>

            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default WeeklyRotationComponent;
