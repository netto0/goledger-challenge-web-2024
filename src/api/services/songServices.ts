import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

const getSongsService = async () => {
    try {
      const response = await getItensByType("song");
      return response;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            return error.response.data;
          }
    }
  };

  const addSongService = async (name: string, albumKey: string) => {
    try {
      const response = await axios.post(`${baseUrl}/invoke/createAsset`, {
        asset: [
          {
            "@assetType": "song",
            name: name,
            album: {"@key": albumKey},
          },
        ],
      }, 
      {
        auth: authPayload,
      });
      return response;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return error.response.data;
      }
    }
  };

export {getSongsService, addSongService}