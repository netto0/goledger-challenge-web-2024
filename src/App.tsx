import React, { useEffect, useState } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import { getOneItem } from "./api/axios";

function App() {
  const {getArtists, artists, getSongs, songs} = React.useContext(AssetListsContext)
  const [artist,setArtist] = useState({})
  const [song,setSong] = useState("")
  
  const getOneArtist = async () => {
    const response = await getOneItem("artist","Annita")
    setArtist(response)
  }

  useEffect(() => {getArtists(), getSongs()},[])

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
      <h1>Artista</h1>
      <p>{JSON.stringify(song)}</p>
    </>
  );
}

export default App;
