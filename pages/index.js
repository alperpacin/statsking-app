import axios from "axios";
import SearchBar from "@/components/SearchBar/SearchBar";
import GenericLayout from "@/layout/generic-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("home");
  const getSummoner = async () => {
    try {
      const response = await axios.post("/api/summoner/get-summoner-by-name", {
        apiRoute: "tr1.api.riotgames.com",
        summonerName: "kaydeyus",
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  return (
    <GenericLayout className="min-h-screen sm:pl-[4rem]">
      <div className="bg-[url('/images/league-of-legends/background-image.jpg')] bg-origin-border bg-no-repeat bg-center bg-cover z-0 fixed top-0 left-0 right-0 h-64"></div>
      <div className="h-64 w-full bg-gradient-to-t from-background from-15% to-transparent fixed"></div>
      <section className=" relative z-10 container flex flex-col min-h-screen w-full lg:w-2/3 xl:w-1/2 xl:max-w-[1140px] pt-32">
        <SearchBar icon={"lol"} />
      </section>
    </GenericLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "sidebar"])),
    },
  };
}
