import React, { useEffect, useState } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import { addArtistService } from "./api/services/artistServices";
import { addSongService } from "./api/services/songServices";
import { addAlbumService } from "./api/services/albumServices";
import { addPlaylistService } from "./api/services/playlistServices";



function App() {
  const {getArtists, artists, getSongs, songs, getAlbums, albums, getPlaylists, playlists} = React.useContext(AssetListsContext)

  const [newArtistObj, setNewArtistObj] = useState({name: "", country: ""})
  const [newSongObj, setNewSongObj] = useState({name: "", albumKey: ""})
  const [newAlbumObj, setNewAlbumObj] = useState({name: "", year: "", artistKey:""})
  const [newPlaylistObj, setNewPlaylistObj] = useState({name: "", privPlaylist: false, songsArray: ""})

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
        <h1>Novo artista</h1>
        <h2>Nome: {newArtistObj.name}</h2>
        <h2>País: {newArtistObj.country}</h2>
        <input type="text" placeholder="Digite o nome..." name="artistName" id="aName" className="bg-red-300" value={newArtistObj.name} onChange={(e) => setNewArtistObj({...newArtistObj, name: e.target.value})}/>
        <br />
        <input type="text" placeholder="Digite o país..." name="artistCountry" id="aCountry" className="bg-red-300" value={newArtistObj.country} onChange={(e) => setNewArtistObj({...newArtistObj, country: e.target.value})}/>
        <br />
        <button className="bg-blue-200" onClick={() => addArtistService(newArtistObj.name, newArtistObj.country)}>Enviar</button>
        <br />

        <h1>Nova música</h1>
        <h2>Nome: {newSongObj.name}</h2>
        <h2>Chave do Álbum: {newSongObj.albumKey}</h2>
        <input type="text" placeholder="Digite o nome..." name="songName" id="sName" className="bg-red-300" value={newSongObj.name} onChange={(e) => setNewSongObj({...newSongObj, name: e.target.value})}/>
        <br />
        <input type="text" placeholder="Digite a chave do album..." name="albumKey" id="alKey" className="bg-red-300" value={newSongObj.albumKey} onChange={(e) => setNewSongObj({...newSongObj, albumKey: e.target.value})}/>
        <br />
        <button className="bg-blue-200" onClick={() => addSongService(newSongObj.name, newSongObj.albumKey)}>Enviar</button>
        <br />

        <h1>Novo álbum</h1>
        <h2>Nome: {newAlbumObj.name}</h2>
        <h2>Nome: {newAlbumObj.year}</h2>
        <h2>Chave do Artista: {newAlbumObj.artistKey}</h2>
        <input type="text" placeholder="Digite o nome..." name="albumName" id="alName" className="bg-red-300" value={newAlbumObj.name} onChange={(e) => setNewAlbumObj({...newAlbumObj, name: e.target.value})}/>
        <br />
        <input type="number" placeholder="Digite o ano..." name="albumYear" id="alYear" className="bg-red-300" value={newAlbumObj.year} onChange={(e) => setNewAlbumObj({...newAlbumObj, year: e.target.value})}/>
        <br />
        <input type="text" placeholder="Digite a chave do artista..." name="artistKey" id="arKey" className="bg-red-300" value={newAlbumObj.artistKey} onChange={(e) => setNewAlbumObj({...newAlbumObj, artistKey: e.target.value})}/>
        <br />
        <button className="bg-blue-200" onClick={() => addAlbumService(newAlbumObj.name, parseInt(newAlbumObj.year), newAlbumObj.artistKey)}>Enviar</button>
        <br />

        <h1>Nova playlist</h1>
        <h2>Nome: {newPlaylistObj.name}</h2>
        <h2>Private?: {newPlaylistObj.privPlaylist ? "True" : "False"}</h2>
        <h2>Array de músicas: {newPlaylistObj.songsArray}</h2>
        <input type="text" placeholder="Digite o nome..." name="playlistName" id="pName" className="bg-red-300" value={newPlaylistObj.name} onChange={(e) => setNewPlaylistObj({...newPlaylistObj, name: e.target.value})}/>
        <br />
        <label htmlFor="privPL">Private?</label>
        <input type="checkbox" name="privPL" id="privPL" checked={newPlaylistObj.privPlaylist} onChange={() => setNewPlaylistObj({...newPlaylistObj, privPlaylist: !newPlaylistObj.privPlaylist})}/>
        <br />
        <input type="text" placeholder="Insira a lista de músicas..." name="songsArray" id="sArray" className="bg-red-300" value={newPlaylistObj.songsArray} onChange={(e) => setNewPlaylistObj({...newPlaylistObj, songsArray: e.target.value})}/>
        <br />
        <button className="bg-blue-200" onClick={() => addPlaylistService(newPlaylistObj.name, newPlaylistObj.privPlaylist, JSON.parse(newPlaylistObj.songsArray))}>Enviar</button>
      </div>
    </div>
  );
}

export default App;

// [{"@key": "song:21fb21f9-bca2-5734-9c7d-9a9b3d989cd7"}, {"@key": "song:229816cc-8f4c-51c1-9c0f-2375c6d51375"}, {"@key": "song:2545d178-4ab1-582a-a93f-b049fe279ff0"}]