import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export {getAlbumsService}