import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";

function App() {
  const {getArtists, artists, getSongs, songs, getAlbums, albums, getPlaylists, playlists} = React.useContext(AssetListsContext)
  
  useEffect(() => {getArtists(), getSongs(), getAlbums(), getPlaylists()},[])

  return (
    <>
      <h1>Artistas</h1>
      <p>{artists.map((artist, index) => (
        <li key={index}>
          {artist.name} - {artist.country} - {artist["@key"].split(":")[1]}
        </li>
      ))}</p>
      <h1>Músicas</h1>
      <p>{songs.map((song, index) => (
        <li key={index}>
          {song.name} - {JSON.stringify(song.album)} - {song["@key"].split(":")[1]}
        </li>
      ))}</p>
      <h1>Álbums</h1>
      <p>{albums.map((album, index) => (
        <li key={index}>
          {album.name} - {album.year} - {JSON.stringify(album.artist)} - {album["@key"].split(":")[1]}
        </li>
      ))}</p>
      <h1>Playlists</h1>
      <p>{playlists.map((playlist, index) => (
        <li key={index}>
          {playlist.name} - {playlist.private? "True" : "False"} - {JSON.stringify(playlist.songs)} - {playlist["@key"].split(":")[1]}
        </li>
      ))}</p>
    </>
  );
}

export default App;
