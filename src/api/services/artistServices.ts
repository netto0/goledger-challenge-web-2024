import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

const getArtistsService = async () => {
    try {
      const response = await getItensByType("artist");
      return response;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            return error.response.data;
          }
    }
  };

  const addArtistService = async (name: string, country: string) => {
    try {
      const response = await axios.post(`${baseUrl}/invoke/createAsset`, {
        asset: [
          {
            "@assetType": "artist",
            name: name,
            country: country,
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

export {getArtistsService, addArtistService}