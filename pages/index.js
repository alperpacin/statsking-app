import axios from "axios";
import GenericLayout from "@/layout/generic-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getChampionImageUrl,
  getLoadingImageUrl,
  getSplashImageUrl,
} from "@/lib/utils";
import { useRouter } from "next/router";

const getFreeTierChampions = async (region) => {
  try {
    const response = await axios.post("/api/get-free-rotation", {
      apiRoute: region ? region : "na1.api.riotgames.com",
      summonerName: "kaydeyus",
    });

    return response.data;
  } catch (error) {
    console.error("Error sending data:", error.message);
  }
};

export default function Home() {
  const router = useRouter();
  const [region, setRegion] = useState(() => {
    if (typeof window !== "undefined") {
      const savedRegion = localStorage.getItem("selectedRegion");
      return savedRegion ? savedRegion : null;
    }
    return null;
  });
  const [freeTierChamps, setFreeTierChamps] = useState(null);

  const { t } = useTranslation("home");

  useEffect(() => {
    if (!localStorage.getItem("selectedRegion")) {
      localStorage.setItem("selectedRegion", "na1.api.riotgames.com");
    }
    const a = async () => {
      const res = await getFreeTierChampions(region);
      setFreeTierChamps(res);
    };

    a();
  }, []);

  const navigateToChampionDetail = (champion) => {
    router.push(
      {
        pathname: `/champions/${champion.name.toLowerCase()}`,
        query: {
          data: JSON.stringify(champion),
        },
      },
      `/champions/${champion.name.toLowerCase()}`
    );
  };

  return (
    <GenericLayout className="min-h-screen">
      <div className="h-96 w-full bg-gradient-to-b from-background from-15% to-transparent fixed bottom-0"></div>
      <section className=" relative z-10 container flex flex-col min-h-screen w-full lg:w-2/3 xl:w-1/2 xl:max-w-[1140px] pt-32">
        <article>
          <div className="flex flex-wrap transition-all duration-200 justify-center">
            {freeTierChamps &&
              freeTierChamps.map((champ) => (
                <button
                  className="outline-none overflow-hidden relative"
                  onClick={() => navigateToChampionDetail(champ)}
                >
                  <div className="w-24 h-48 group flex items-center overflow-hidden justify-center relative m-1 transition-all duration-200 shadow-sm shadow-black/30">
                    <Image
                      fill
                      className="shadow-sm shadow-black/30 group-hover:scale-110 transition-transform duration-200"
                      src={getLoadingImageUrl(champ.id)}
                      alt={`${champ.id}'s loading image`}
                      objectFit="cover"
                      sizes="(min-width: 60em) 100vw,
                (min-width: 28em) 100vw,
                100vw"
                      quality={80}
                    />
                    <div className="self-end translate-y-[50px] transition-transform duration-200 bg-accent bg-opacity-30 group-hover:translate-y-0  w-full h-8">
                      <span>{champ.name}</span>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </article>
      </section>
    </GenericLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "buttons", "search"])),
    },
  };
}
