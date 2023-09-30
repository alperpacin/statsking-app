import axios from "axios";
import SearchBar from "@/components/SearchBar/SearchBar";
import GenericLayout from "@/layout/generic-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
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
      <div className="bg-[url('/images/league-of-legends/background-image.jpg')] bg-origin-border bg-no-repeat bg-center bg-cover z-0 fixed bottom-0 top-0 left-0 right-0 "></div>
      <div className="h-screen w-full bg-gradient-to-t from-primary from-10% to-transparent fixed"></div>
      <section className=" relative z-10 container flex flex-col sm:justify-center h-screen w-full lg:w-2/3 xl:w-1/2 xl:max-w-[1140px]">
        <h1 className="text-xl sm:text-5xl font-extrabold mt-10 mb-5 leading-snug tracking-wider text-shadow-md">
          League of Legends
        </h1>
        <h3 className="text-xs sm:text-md tracking-wider text-foreground leading-normal mt-2 mb-4 text-shadow-sm">
          Whether you're strategizing for your next match or simply curious
          about your rivals, our platform lets you unlock their secrets and
          elevate your game – because beyond stats, every player has a story.
        </h3>

        <SearchBar icon={"lol"} />
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </GenericLayout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sidebar"])),
    },
  };
}
