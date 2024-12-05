import React, { useState } from "react";
import { getArtistsService } from "../api/services/artistServices";
import { getSongsService } from "../api/services/songServices";
import { getAlbumsService } from "../api/services/albumServices";
import { getPlaylistsService } from "../api/services/playlistServices";

interface AssetListsContextType {
  artists: any[];
  getArtists: () => Promise<void>;
  songs: any[];
  getSongs: () => Promise<void>;
  albums: any[];
  getAlbums: () => Promise<void>;
  playlists: any[];
  getPlaylists: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AssetListsContext = React.createContext<AssetListsContextType>({
  artists: [],
  getArtists: async () => {},
  songs: [],
  getSongs: async () => {},
  albums: [],
  getAlbums: async () => {},
  playlists: [],
  getPlaylists: async () => {},
  loading: true,
  setLoading: () => {},
});


export const AssetListsProvider = (props: { children: React.ReactNode }) => {
  const [artists, setArtists] = useState<any[]>([]);
  const [songs, setSongs] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [playlists, setPlaylists] = useState<any[]>([]);
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

  const getAlbums = async () => {
    setLoading(true);
    const response = await getAlbumsService();
    setAlbums(response);
    setLoading(false);
  };
  
  const getPlaylists = async () => {
    setLoading(true);
    const response = await getPlaylistsService();
    setPlaylists(response);
    setLoading(false);
  };

  return (
    <AssetListsContext.Provider
      value={{
        artists,
        getArtists,
        songs,
        getSongs,
        albums,
        getAlbums,
        playlists,
        getPlaylists,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AssetListsContext.Provider>
  );
};
