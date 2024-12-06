import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

const getAlbumsService = async () => {
  try {
    const response = await getItensByType("album");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const addAlbumService = async (name: string, year: number, artistKey: string) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "album",
            name: name,
            year: year,
            artist: {"@key": artistKey },
          },
        ],
      },
      {
        auth: authPayload,
      }
    );
    console.log("Álbum criado!")
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};
export { getAlbumsService, addAlbumService };
