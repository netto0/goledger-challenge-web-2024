import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export {getSongsService}