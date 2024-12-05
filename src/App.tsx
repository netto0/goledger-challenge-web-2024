import React, { useEffect, useState } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import { getOneItem } from "./api/axios";

function App() {
  const {getArtists, artists, getSongs, songs, getAlbums, albums} = React.useContext(AssetListsContext)
  const [artist,setArtist] = useState({})
  const [song,setSong] = useState("")
  
  const getOneArtist = async () => {
    const response = await getOneItem("artist","Annita")
    setArtist(response)
  }

  useEffect(() => {getArtists(), getSongs(), getAlbums()},[])

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
    </>
  );
}

export default App;
