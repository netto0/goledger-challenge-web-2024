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

  // const getOneItem = (key: string):any => {
  //   const assetType = key.split(":")[0]
  //   let sourceArray: any[]
  
  //   switch (assetType) {
  //     case "artist":
  //       sourceArray = artists
  //       break;
  //       case "album":
  //       sourceArray = albums
  //       break;
  //       case "song":
  //       sourceArray = songs
  //       break;
  //       case "playlist":
  //       sourceArray = playlists
  //       break;
  //       default:
  //       sourceArray = []
  //   }
  //   // console.log(sourceArray)

  //   return [sourceArray.filter(item => item.key == key)[0], assetType]
  // }

  const getArtists = async () => {
    setLoading(true);
    const artists = await getArtistsService();
    let formatedArray:any = [];
    artists.map((artist:any) => {
      formatedArray.push({
        name: artist.name,
        country: artist.country,
        key: artist["@key"]
      });
    });

    setArtists(formatedArray)
    setLoading(false);
  };

  const getSongs = async () => {
    setLoading(true);
    const songs = await getSongsService();
    let formatedArray:any = [];
    songs.map((song:any) => {
      formatedArray.push({
        name: song.name,
        key: song["@key"],
      });
    });

    setSongs(formatedArray)  
    setLoading(false);
  };

  const getAlbums = async () => {
    setLoading(true);
    const albums = await getAlbumsService();
    let formatedArray:any = [];
    albums.map((album:any) => {
      formatedArray.push({
        name: album.name,
        year: album.year,
        key: album["@key"],
      });
    });
    setAlbums(formatedArray)
    setLoading(false);
  };

  const getPlaylists = async () => {
    setLoading(true);
    const playlists = await getPlaylistsService();
    let formatedArray:any = [];
    playlists.map((playlist:any) => {
      formatedArray.push({
        name: playlist.name,
        private: playlist.private,
        key: playlist["@key"]
      });
    });
    setPlaylists(formatedArray)
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
