import React, { SetStateAction, useEffect, useState } from "react";
import { getArtistsService } from "../api/services/artistServices";
import { getSongsService } from "../api/services/songServices";
import { getAlbumsService } from "../api/services/albumServices";
import { getPlaylistsService } from "../api/services/playlistServices";

type modalType = "edit" | "delete" | "add"

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
  getAssetInfos: (key: string) => string;
  getAlbumSongs: (key: string) => any;
  getArtistAlbums: (key: string, returnSongs?: boolean) => any;
  artistKey: string;
  setArtistKey: React.Dispatch<React.SetStateAction<string>>;
  artistInfos: {};
  setArtistInfos: React.Dispatch<
    SetStateAction<{ name: string; songs: never[] }>
  >;
  modalActive: boolean | modalType;
  setModalActive: any
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
  getAssetInfos: () => "",
  getAlbumSongs: () => [],
  getArtistAlbums: () => [],
  artistKey: "",
  setArtistKey: () => {},
  artistInfos: { name: "", songs: [] },
  setArtistInfos: () => {},
  modalActive: false,
  setModalActive: () => {},
});

export const AssetListsProvider = (props: { children: React.ReactNode }) => {
  const [artists, setArtists] = useState<any[]>([]);
  const [songs, setSongs] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [artistKey, setArtistKey] = useState("");
  const [artistInfos, setArtistInfos] = useState({ name: "", songs: [] });
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setArtistInfos({
      name: getAssetInfos(artistKey),
      songs: getArtistAlbums(artistKey, true),
    });
  }, [artistKey]);

  const getArtists = async () => {
    setLoading(true);
    const artists = await getArtistsService();
    let formatedArray: any = [];
    artists.map((artist: any) => {
      formatedArray.push({
        name: artist.name,
        country: artist.country,
        key: artist["@key"],
      });
    });

    setArtists(formatedArray);
    setLoading(false);
  };

  const getSongs = async () => {
    setLoading(true);
    const songs = await getSongsService();
    let formatedArray: any = [];
    songs.map((song: any) => {
      formatedArray.push({
        name: song.name,
        albumKey: song.album["@key"],
        key: song["@key"],
      });
    });

    setSongs(formatedArray);
    setLoading(false);
  };

  const getAlbums = async () => {
    setLoading(true);
    const albums = await getAlbumsService();
    let formatedArray: any = [];
    albums.map((album: any) => {
      formatedArray.push({
        name: album.name,
        artistKey: album.artist["@key"],
        year: album.year,
        key: album["@key"],
      });
    });
    setAlbums(formatedArray);
    setLoading(false);
  };

  const getPlaylists = async () => {
    setLoading(true);
    const playlists = await getPlaylistsService();
    let formatedArray: any = [];
    playlists.map((playlist: any) => {
      formatedArray.push({
        name: playlist.name,
        private: playlist.private,
        songs: JSON.stringify(playlist.songs),
        key: playlist["@key"],
      });
    });
    setPlaylists(formatedArray);
    setLoading(false);
  };

  const getAssetInfos = (key: string): string => {
    const assetType = key?.split(":")[0];
    const selectedArray =
      assetType === "artist"
        ? artists
        : assetType === "album"
        ? albums
        : assetType === "song"
        ? songs
        : assetType === "playlist"
        ? playlists
        : [];

    if (assetType == "album") {
      let assetItemInfos: any = [];
      selectedArray.length > 0 &&
        selectedArray.forEach((item) => {
          if (item && item.key == key) {
            assetItemInfos[0] = item.name || "Nao encontrado";
            assetItemInfos[1] = item.year || "Nao encontrado";
          }
        });
      return assetItemInfos || "Item nao encontrado";
    } else if (assetType == "song") {
      let assetItemInfos: any = [];
      selectedArray.length > 0 &&
        selectedArray.forEach((item) => {
          if (item && item.key == key) {
            assetItemInfos[0] = item.name || "Nao encontrado";
            assetItemInfos[1] =
              getAssetInfos(item.albumKey) || "Album Nao encontrado";
          }
        });
      return assetItemInfos || "Item nao encontrado";
    } else {
      let assetItemName = "";
      selectedArray.length > 0 &&
        selectedArray.forEach((item) => {
          if (item && item.key == key) {
            assetItemName = item.name || "Nao encontrado";
          }
        });
      return assetItemName || "Artista não encontrado";
    }
  };

  const getAlbumSongs = (key: string) => {
    // console.log("AlbumSongs funcionando")
    const assetType = key.split(":")[0];

    if (assetType == "album") {
      // console.log("Tipo Album")
      let albumSongs: any = [];
      songs.forEach((song) => {
        if (song.albumKey == key) {
          // console.log(song.albumKey, "=", key, "=", song.albumKey == key ? "True" : "False")
          albumSongs.push(song.key);
        }
      });
      return albumSongs;
    }
  };

  const getArtistAlbums = (key: string, returnSongs: boolean = false) => {
    // console.log("ArtistAlbums funcionando");
    const assetType = key.split(":")[0];
    let artistAlbums: any = [];
    let artistSongs: any = [];

    // console.log(typeof artistAlbums);

    if (assetType == "artist") {
      // console.log("Tipo Artist");
      albums.forEach((album) => {
        if (album.artistKey == key) {
          const albumSongs = getAlbumSongs(album.key);
          artistAlbums.push(album.key);
          if (albumSongs.length > 0) {
            albumSongs.forEach((song: any) => artistSongs.push(song));
          }
        }
      });
    }

    if (returnSongs) {
      // console.log("Retornando músicas");
      // console.log(artistSongs);
      return artistSongs;
    } else {
      // console.log("Retornando álbums");
      // console.log(artistAlbums);
      return artistAlbums;
    }
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
        getAssetInfos,
        getAlbumSongs,
        getArtistAlbums,
        artistKey,
        setArtistKey,
        artistInfos,
        setArtistInfos,
        modalActive,
        setModalActive
      }}
    >
      {props.children}
    </AssetListsContext.Provider>
  );
};
