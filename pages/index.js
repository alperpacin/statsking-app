import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";

import GenericLayout from "@/layout/generic-layout";
import WeeklyRotationComponent from "@/components/WeeklyRotation";

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
      return savedRegion ? JSON.parse(savedRegion) : null;
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

  return (
    <GenericLayout className="min-h-screen">
      <div className="h-96 w-full bg-gradient-to-b from-background from-15% to-transparent fixed bottom-0"></div>
      <section className="container xxl:px-0 pt-32">
        <WeeklyRotationComponent freeTierChamps={freeTierChamps} t={t} />
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
