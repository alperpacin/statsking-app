import axios, { all } from "axios";

const handler = async (req, res) => {
  const { body } = req;

  try {
    // Make a GET request to some external API with custom headers
    const championRotationResponse = await axios.get(
      `https://${body.apiRoute}/lol/platform/v3/champion-rotations`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_DEV_API_KEY,
        },
      }
    );

    const allChampionsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_DDRAGON_CDN_URL}/${process.env.NEXT_PUBLIC_LOL_VERSION}/data/tr_TR/champion.json`
    );
    const returningObject = [];

    const allChampionsData = allChampionsResponse.data.data;

    if (championRotationResponse.data) {
      const freeChampionIds = championRotationResponse.data.freeChampionIds;

      freeChampionIds.forEach((id) => {
        for (let champ in allChampionsData) {
          if (allChampionsData[champ].key === id.toString()) {
            returningObject.push(allChampionsData[champ]);
          }
        }
      });
    }

    // Send the data received from the external API as the response of this route
    res.status(200).json(returningObject);
  } catch (error) {
    // If there's an error, send the error message as the response
    res.status(500).json({
      error: error,
    });
  }
};

export default handler;
