import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export {getArtistsService}