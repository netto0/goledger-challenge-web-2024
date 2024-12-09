import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";
import { SongType } from "../../types/SongType";

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
  isPrivate: boolean,
  songsArray: SongType[]
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "playlist",
            name: name,
            private: isPrivate,
            songs: songsArray,
          },
        ],
      },
      {
        auth: authPayload,
      }
    );
    location.reload()
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const updatePlaylistService = async (key: string, isPrivate: boolean, songsArray: string) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/updateAsset`,
      {
        update: {
          "@assetType": "playlist",
          "@key": key,
          private: isPrivate,
          songs: songsArray
        },
      },
      {
        auth: authPayload,
      }
    );
    location.reload()
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

export { getPlaylistsService, addPlaylistService, updatePlaylistService };
