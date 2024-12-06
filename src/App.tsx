import React, { useEffect, useState } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import { addArtistService } from "./api/services/artistServices";



function App() {
  const {getArtists, artists, getSongs, songs, getAlbums, albums, getPlaylists, playlists} = React.useContext(AssetListsContext)

  
  const [newArtistName, setNewArtistName] = useState("")  
  const [newArtistCountry, setNewArtistCountry] = useState("")  
  useEffect(() => {getArtists(), getSongs(), getAlbums(), getPlaylists()},[])

  return (
    <div className="flex">
      <div className="border border-black w-1/2">
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
      </div>
      <div className="border border-black w-1/2">
        <h1>Novo Artista</h1>
        <h2>Nome: {newArtistName}</h2>
        <h2>País: {newArtistCountry}</h2>
        <input type="text" placeholder="Digite o nome..." name="artistName" id="aName" className="bg-red-300" value={newArtistName} onChange={(e) => setNewArtistName(e.target.value)}/>
        <br />
        <input type="text" placeholder="Digite o país..." name="artistName" id="aName" className="bg-red-300" value={newArtistCountry} onChange={(e) => setNewArtistCountry(e.target.value)}/>
        <br />
        <button className="bg-blue-200" onClick={() => addArtistService(newArtistName, newArtistCountry)}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
