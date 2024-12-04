import React, { useState } from "react";
import { getArtistsService } from "../api/services/artistServices";

interface AssetListsContextType {
  artists: any[];
  getArtists: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AssetListsContext = React.createContext<AssetListsContextType>({
  artists: [],
  getArtists: async () => {},
  loading: true,
  setLoading: () => {},
});


export const AssetListsProvider = (props: { children: React.ReactNode }) => {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getArtists = async () => {
    setLoading(true);
    const response = await getArtistsService();
    setArtists(response);
    setLoading(false);
  };

  return (
    <AssetListsContext.Provider
      value={{
        artists,
        getArtists,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AssetListsContext.Provider>
  );
};
