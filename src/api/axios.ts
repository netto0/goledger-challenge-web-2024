import { AssetType } from "../types/assetType";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL || "";

const getItensByType = async (type: AssetType) => {
  const response = await axios.post(`${baseUrl}/query/search`,
    {
      query: {
        selector: {
          "@assetType": type,
        },
      },
    },
    {
      auth: {
        username: import.meta.env.VITE_USERNAME || "",
        password: import.meta.env.VITE_PASSWORD || "",
      },
    }
  );
  return response.data.result;
};

export { getItensByType };
