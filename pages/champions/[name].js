import { capitalizeFirstLetter, cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ChampionPage = ({ data }) => {
  const router = useRouter();

  const [championData, setChampionData] = useState(data);

  if (!data) {
    return (
      <div className="absolute z-10 top-0 bottom-0 left-0 right-0 w-screen flex items-center justify-center">
        <Spinner size="lg" color="current" className="text-accent" />
      </div>
    );
  }

  return <div>{championData?.name}</div>;
};

export default ChampionPage;

export const getServerSideProps = async ({ params, locale }) => {
  const givenName = capitalizeFirstLetter(params.name);

  try {
    let champInfo;

    const allChampionsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_DDRAGON_CDN_URL}/${process.env.NEXT_PUBLIC_LOL_VERSION}/data/en_US/champion.json`
    );
    if (allChampionsResponse.data) {
      const allChampionsData = allChampionsResponse.data.data;
      for (let champ in allChampionsData) {
        if (allChampionsData[champ].name === givenName) {
          champInfo = allChampionsData[champ];
        }
      }
      if (champInfo) {
        return {
          props: {
            ...(await serverSideTranslations(locale, ["champions", "header"])),
            data: champInfo,
          },
        };
      } else {
        return {
          props: {},
          redirect: {
            permanent: false,
            destination: "/404",
          },
        };
      }
    } else {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: "/404",
        },
      };
    }
  } catch (error) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
};
