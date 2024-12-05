import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export {getPlaylistsService}