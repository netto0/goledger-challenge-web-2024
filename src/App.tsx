import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";



function App() {
  const {getArtists, artists, getSongs, songs, getAlbums, albums, getPlaylists, playlists} = React.useContext(AssetListsContext)

  const getOneItem = (key: string):any => {
    const assetType = key.split(":")[0]
    let sourceArray: any[]
  
    switch (assetType) {
      case "artist":
        sourceArray = artists
        break;
        case "album":
        sourceArray = albums
        break;
        case "song":
        sourceArray = songs
        break;
        case "playlist":
        sourceArray = playlists
        break;
        default:
        sourceArray = []
    }
    
    return [sourceArray.filter(item => item["@key"] == key)[0], assetType]
  }

  useEffect(() => {getArtists(), getSongs(), getAlbums(), getPlaylists()},[])
  
  return (
    <>
      <h1>Artistas</h1>
      <p>{artists.map((artist, index) => (
        <li key={index}>
          {artist.name} - {artist.country} - {artist["@key"]}
        </li>
      ))}</p>
      <h1>Músicas</h1>
      <p>{songs.map((song, index) => (
        <li key={index}>
          {song.name} - {getOneItem(song.album["@key"])[0].name} - {song["@key"]}
        </li>
      ))}</p>
      <h1>Álbums</h1>
      <p>{albums.map((album, index) => (
        <li key={index}>
          {album.name} - {album.year} - {getOneItem(album.artist["@key"])[0].name} - {album["@key"]}
        </li>
      ))}</p>
      <h1>Playlists</h1>
      <p>{playlists.map((playlist, index) => (
        <li key={index}>
          {playlist.name} - {playlist.private? "True" : "False"} - ({playlist.songs.map((song: any) => <strong key={song["@key"]}>{getOneItem(song["@key"])[0].name}, </strong>)}) - {playlist["@key"].split(":")[1]}
        </li>
      ))}</p>
    </>
  );
}

export default App;
