import { AssetType } from "../types/assetType";
import axios, { AxiosError } from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL || "";

const authPayload = {
  username: import.meta.env.VITE_USERNAME || "",
  password: import.meta.env.VITE_PASSWORD || "",
}

const getItensByType = async (type: AssetType) => {
  const response = await axios.post(
    `${baseUrl}/query/search`,
    {
      query: {
        selector: {
          "@assetType": type,
        },
      },
    },
    {
      auth: authPayload,
    }
  );
  return response.data.result;
};

const getOneItem = async (assetType: AssetType, key: string ) => {
  try {
    const response = await axios.post(`${baseUrl}/query/readAsset`, {
      key: {
        "@assetType": assetType,
        "@key": key,
      },
    }, {auth: authPayload});
    return(response.data);
  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    } else {
      return error
    }
  }
};

export { getItensByType, getOneItem };
