import { Inter } from "next/font/google";

import axios from "axios";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

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
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />

      <button onClick={getSummoner}>Get Summoner</button>
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
    </main>
  );
}
