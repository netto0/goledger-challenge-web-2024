import { AssetType } from "../types/assetType";
import axios, { AxiosError } from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL || "";

const authPayload = {
  username: import.meta.env.VITE_USERNAME || "",
  password: import.meta.env.VITE_PASSWORD || "",
};

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

const deleteItem = async (itemKey: string) => {
  try {
    console.log(`Deletando "${itemKey}"...`);
    const response = await axios.delete(
      `${baseUrl}/invoke/deleteAsset`,
      {
        data: {
          key: {
            "@key": itemKey,
          },
          cascade: true,
        },
        auth: authPayload,
      }
    );
    response && console.log("Deletado com sucesso: ", response);
    location.reload();
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

export { getItensByType, baseUrl, authPayload, deleteItem };
