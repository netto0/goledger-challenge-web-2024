import { AssetType } from "../types/assetType";
import axios from "axios";

const baseUrl = "http://ec2-54-91-215-149.compute-1.amazonaws.com/api";

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
        username: "psAdmin",
        password: "goledger",
      },
    }
  );
  return response.data.result;
};

export { getItensByType };
