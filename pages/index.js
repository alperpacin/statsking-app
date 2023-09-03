import axios from "axios";
import SearchBar from "@/components/SearchBar/SearchBar";
import GenericLayout from "@/layout/generic-layout";

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
    <GenericLayout className="min-h-screen bg-[url('/images/league-of-legends/background-image.jpg')] bg-origin-border bg-no-repeat bg-center bg-cover 2xl:bg-cover ">
      <div className="absolute h-screen w-full bg-gradient-to-t from-primary from-10% to-transparent"></div>
      <section className=" relative z-10 container flex flex-col pt-16  sm:justify-center h-screen w-full lg:w-2/3 xl:w-1/2 xl:max-w-[1140px]">
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
    </GenericLayout>
  );
}
