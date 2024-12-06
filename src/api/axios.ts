import { AssetType } from "../types/assetType";
import axios from "axios";

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


export { getItensByType, baseUrl, authPayload };
