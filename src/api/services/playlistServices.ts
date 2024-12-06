import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

type SongObject = {
  "@key": string;
};

const getPlaylistsService = async () => {
  try {
    const response = await getItensByType("playlist");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const addPlaylistService = async (
  name: string,
  privPlaylist: boolean,
  songsArray: SongObject[]
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "playlist",
            name: name,
            private: privPlaylist,
            songs: songsArray,
          },
        ],
      },
      {
        auth: authPayload,
      }
    );
    console.log("Playlist criada!");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

export { getPlaylistsService, addPlaylistService };