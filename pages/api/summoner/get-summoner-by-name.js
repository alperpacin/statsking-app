import axios from "axios";

const handler = async (req, res) => {
  const { body } = req;

  try {
    // Make a GET request to some external API with custom headers
    const response = await axios.get(
      `https://${body.apiRoute}/lol/summoner/v4/summoners/by-name/${body.summonerName}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_DEV_API_KEY,
        },
      }
    );

    // Send the data received from the external API as the response of this route
    res.status(200).json(response.data);
  } catch (error) {
    // If there's an error, send the error message as the response
    res.status(500).json({ error: error.message });
  }
};

export default handler;
