import axios from "axios";

const youtubeData = async (searchTerm) => {
  try {
    const youtube = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
    });

    const KEY = process.env.REACT_APP_UTUBE_API_KEY;

    const videoData = await youtube.get("/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: `${KEY}`,
      },
    });
    return videoData.data.items;
  } catch (err) {
      return err.message;
  } 
};

export default youtubeData;
