import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";



function App() {
  const {getArtists, artists, getSongs, songs, getAlbums, albums, getPlaylists, playlists} = React.useContext(AssetListsContext)

  useEffect(() => {getArtists(), getSongs(), getAlbums(), getPlaylists()},[])

  return (
    <>
      <h1>Artistas: {artists.length}</h1>
      <p>{artists.map((artist, index) => (
        <li key={index}>
          {artist.name} - {artist.country} - {artist.key}
        </li>
      ))}</p>
      <h1>Músicas: {songs.length}</h1>
      <p>{songs.map((song, index) => (
        <li key={index}>
          {song.name} - {song.key}
        </li>
      ))}</p>
      <h1>Álbums: {albums.length}</h1>
      <p>{albums.map((album, index) => (
        <li key={index}>
          {album.name} - {album.year} - {album.key}
        </li>
      ))}</p>
      <h1>Playlists: {playlists.length}</h1>
      <p>{playlists.map((playlist, index) => (
        <li key={index}>
          {playlist.name} - {playlist.private? "True" : "False"} - {playlist.key}
        </li>
      ))}</p>
    </>
  );
}

export default App;
