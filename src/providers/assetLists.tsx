import React, { useState } from "react";
import { getArtistsService } from "../api/services/artistServices";
import { getSongsService } from "../api/services/songServices";

interface AssetListsContextType {
  artists: any[];
  getArtists: () => Promise<void>;
  songs: any[];
  getSongs: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AssetListsContext = React.createContext<AssetListsContextType>({
  artists: [],
  getArtists: async () => {},
  songs: [],
  getSongs: async () => {},
  loading: true,
  setLoading: () => {},
});


export const AssetListsProvider = (props: { children: React.ReactNode }) => {
  const [artists, setArtists] = useState<any[]>([]);
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getArtists = async () => {
    setLoading(true);
    const response = await getArtistsService();
    setArtists(response);
    setLoading(false);
  };

  const getSongs = async () => {
    setLoading(true);
    const response = await getSongsService();
    setSongs(response);
    setLoading(false);
  };

  return (
    <AssetListsContext.Provider
      value={{
        artists,
        getArtists,
        songs,
        getSongs,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AssetListsContext.Provider>
  );
};
