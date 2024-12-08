import React, { useState } from "react";
import { AssetListsContext } from "../providers/assetLists";
import {
  addArtistService,
  updateArtistService,
} from "../api/services/artistServices";
import { addSongService } from "../api/services/songServices";
import {
  addAlbumService,
  updateAlbumService,
} from "../api/services/albumServices";
import {
  addPlaylistService,
  updatePlaylistService,
} from "../api/services/playlistServices";

export default function Tests() {
  const { artists, songs, albums, playlists } =
    React.useContext(AssetListsContext);

  const [newArtistObj, setNewArtistObj] = useState({
    name: "",
    country: "",
    key: "",
  });
  const [newSongObj, setNewSongObj] = useState({
    name: "",
    albumKey: "",
    key: "",
  });
  const [newAlbumObj, setNewAlbumObj] = useState({
    name: "",
    year: "",
    artistKey: "",
    key: "",
  });
  const [newPlaylistObj, setNewPlaylistObj] = useState({
    name: "",
    isPrivate: false,
    songsArray: "",
    key: "",
  });

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
    console.log("ArtistAlbums funcionando");
    const assetType = key.split(":")[0];
    let artistAlbums: any = [];
    let artistSongs: any = [];

    console.log(typeof artistAlbums);

    if (assetType == "artist") {
      console.log("Tipo Artist");
      albums.forEach((album) => {
        if (album.artistKey == key) {
          // console.log(album.albumKey, "=", key, "=", album.albumKey == key ? "True" : "False")
          artistAlbums.push(album.key);
          artistSongs.push(getAlbumSongs(album.key));
        }
      });
    }

    if (returnSongs) {
      console.log("Retornando músicas")
      console.log(artistSongs);
      return artistSongs;
    } else {
      console.log("Retornando álbums")
      console.log(artistAlbums);
      return artistAlbums;
    }
  };

  getArtistAlbums("artist:8de41e7c-a762-5aa3-8871-250bb739c006",true);

  return (
    <div className="flex">
      <div className="border border-black w-1/2">
        <h1>Artistas: {artists.length}</h1>
        <p>
          {artists.map((artist, index) => (
            <li
              key={index}
              onClick={() =>
                setNewArtistObj({
                  name: artist.name,
                  country: artist.country,
                  key: artist.key,
                })
              }
            >
              {artist.name} - {artist.country} - {artist.key}
            </li>
          ))}
        </p>
        <h1>Músicas: {songs.length}</h1>
        <p>
          {songs.map((song, index) => (
            <li key={index}>
              {song.name} - {song.albumKey} - {song.key}
            </li>
          ))}
        </p>
        <h1>Álbums: {albums.length}</h1>
        <p>
          {albums.map((album, index) => (
            <li
              key={index}
              onClick={() =>
                setNewAlbumObj({
                  name: album.name,
                  year: album.year,
                  artistKey: album.artistKey,
                  key: album.key,
                })
              }
            >
              {album.name} - {album.year} - {album.artistKey} -{" "}
              <strong>{getAlbumSongs(album.key)}</strong> - {album.key}
            </li>
          ))}
        </p>
        <h1>Playlists: {playlists.length}</h1>
        <p>
          {playlists.map((playlist, index) => (
            <li
              key={index}
              onClick={() =>
                setNewPlaylistObj({
                  name: playlist.name,
                  isPrivate: playlist.private,
                  songsArray: playlist.songs,
                  key: playlist.key,
                })
              }
            >
              {playlist.name} - {playlist.private ? "True" : "False"} -{" "}
              {playlist.songs} - {playlist.key}
            </li>
          ))}
        </p>
      </div>
      <div className="border border-black w-1/2">
        <h1>Novo artista</h1>
        <h2>Nome: {newArtistObj.name}</h2>
        <h2>País: {newArtistObj.country}</h2>
        <input
          type="text"
          placeholder="Digite o nome..."
          name="artistName"
          id="aName"
          className="bg-red-300"
          value={newArtistObj.name}
          onChange={(e) =>
            setNewArtistObj({ ...newArtistObj, name: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Digite o país..."
          name="artistCountry"
          id="aCountry"
          className="bg-red-300"
          value={newArtistObj.country}
          onChange={(e) =>
            setNewArtistObj({ ...newArtistObj, country: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            addArtistService(newArtistObj.name, newArtistObj.country)
          }
        >
          Enviar
        </button>
        <br />

        <h1>Nova música</h1>
        <h2>Nome: {newSongObj.name}</h2>
        <h2>Chave do Álbum: {newSongObj.albumKey}</h2>
        <input
          type="text"
          placeholder="Digite o nome..."
          name="songName"
          id="sName"
          className="bg-red-300"
          value={newSongObj.name}
          onChange={(e) =>
            setNewSongObj({ ...newSongObj, name: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Digite a chave do album..."
          name="albumKey"
          id="alKey"
          className="bg-red-300"
          value={newSongObj.albumKey}
          onChange={(e) =>
            setNewSongObj({ ...newSongObj, albumKey: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() => addSongService(newSongObj.name, newSongObj.albumKey)}
        >
          Enviar
        </button>
        <br />

        <h1>Novo álbum</h1>
        <h2>Nome: {newAlbumObj.name}</h2>
        <h2>Nome: {newAlbumObj.year}</h2>
        <h2>Chave do Artista: {newAlbumObj.artistKey}</h2>
        <input
          type="text"
          placeholder="Digite o nome..."
          name="albumName"
          id="alName"
          className="bg-red-300"
          value={newAlbumObj.name}
          onChange={(e) =>
            setNewAlbumObj({ ...newAlbumObj, name: e.target.value })
          }
        />
        <br />
        <input
          type="number"
          placeholder="Digite o ano..."
          name="albumYear"
          id="alYear"
          className="bg-red-300"
          value={newAlbumObj.year}
          onChange={(e) =>
            setNewAlbumObj({ ...newAlbumObj, year: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Digite a chave do artista..."
          name="artistKey"
          id="arKey"
          className="bg-red-300"
          value={newAlbumObj.artistKey}
          onChange={(e) =>
            setNewAlbumObj({ ...newAlbumObj, artistKey: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            addAlbumService(
              newAlbumObj.name,
              parseInt(newAlbumObj.year),
              newAlbumObj.artistKey
            )
          }
        >
          Enviar
        </button>
        <br />

        <h1>Nova playlist</h1>
        <h2>Nome: {newPlaylistObj.name}</h2>
        <h2>Private?: {newPlaylistObj.isPrivate ? "True" : "False"}</h2>
        <h2>Array de músicas: {newPlaylistObj.songsArray}</h2>
        <input
          type="text"
          placeholder="Digite o nome..."
          name="playlistName"
          id="pName"
          className="bg-red-300"
          value={newPlaylistObj.name}
          onChange={(e) =>
            setNewPlaylistObj({ ...newPlaylistObj, name: e.target.value })
          }
        />
        <br />
        <label htmlFor="privPL">Private?</label>
        <input
          type="checkbox"
          name="privPL"
          id="privPL"
          checked={newPlaylistObj.isPrivate}
          onChange={() =>
            setNewPlaylistObj({
              ...newPlaylistObj,
              isPrivate: !newPlaylistObj.isPrivate,
            })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Insira a lista de músicas..."
          name="songsArray"
          id="sArray"
          className="bg-red-300"
          value={newPlaylistObj.songsArray}
          onChange={(e) =>
            setNewPlaylistObj({ ...newPlaylistObj, songsArray: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            addPlaylistService(
              newPlaylistObj.name,
              newPlaylistObj.isPrivate,
              JSON.parse(newPlaylistObj.songsArray)
            )
          }
        >
          Enviar
        </button>

        <h1>Editar Artista</h1>
        <h2>Nome: {newArtistObj.name}</h2>
        <h2>País*: {newArtistObj.country}</h2>
        <input
          type="text"
          placeholder="Digite o novo país..."
          name="newCountry"
          id="newCountry"
          className="bg-red-300"
          value={newArtistObj.country}
          onChange={(e) =>
            setNewArtistObj({ ...newArtistObj, country: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            updateArtistService(newArtistObj.key, newArtistObj.country)
          }
        >
          Enviar
        </button>

        <h1>Editar Álbum</h1>
        <h2>Nome: {newAlbumObj.name}</h2>
        <h2>Ano*: {newAlbumObj.year}</h2>
        <input
          type="number"
          placeholder="Digite o novo ano..."
          name="newYear"
          id="newYear"
          className="bg-red-300"
          value={newAlbumObj.year}
          onChange={(e) =>
            setNewAlbumObj({ ...newAlbumObj, year: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            updateAlbumService(newAlbumObj.key, parseInt(newAlbumObj.year))
          }
        >
          Enviar
        </button>

        <h1>Editar Playlist</h1>
        <h2>Nome: {newPlaylistObj.name}</h2>
        <label htmlFor="privPL">Private?</label>
        <input
          type="checkbox"
          name="privPL"
          id="privPL"
          checked={newPlaylistObj.isPrivate}
          onChange={() =>
            setNewPlaylistObj({
              ...newPlaylistObj,
              isPrivate: !newPlaylistObj.isPrivate,
            })
          }
        />
        <h2>Songs*: {JSON.stringify(newPlaylistObj.songsArray)}</h2>
        <br />
        <input
          type="text"
          placeholder="Insira o array de músicas..."
          name="songs"
          id="songs"
          className="bg-red-300"
          value={newPlaylistObj.songsArray}
          onChange={(e) =>
            setNewPlaylistObj({ ...newPlaylistObj, songsArray: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            updatePlaylistService(
              newPlaylistObj.key,
              newPlaylistObj.isPrivate,
              JSON.parse(newPlaylistObj.songsArray)
            )
          }
        >
          Enviar
        </button>

        <h1>Pesquisar Artista</h1>
        <h2>Nome: {newArtistObj.name}</h2>
        <h2>País*: {newArtistObj.country}</h2>
        <input
          type="text"
          placeholder="Digite o novo país..."
          name="newCountry"
          id="newCountry"
          className="bg-red-300"
          value={newArtistObj.country}
          onChange={(e) =>
            setNewArtistObj({ ...newArtistObj, country: e.target.value })
          }
        />
        <br />
        <button
          className="bg-blue-200"
          onClick={() =>
            updateArtistService(newArtistObj.key, newArtistObj.country)
          }
        >
          Enviar
        </button>
      </div>
    </div>
  );
}





// const getArtistName = (key: string):string => {
//   let artistName = ""
//   artists.forEach(artist => {
//     if(artist.key == key) {
//       artistName = artist.name
//     }
//   })
//   return artistName
// }

// const getAlbumSongs = (key: string) => {
//   // console.log("AlbumSongs funcionando")
//   const assetType = key.split(":")[0];

//   if (assetType == "album") {
//     // console.log("Tipo Album")
//     let albumSongs: any = [];
//     songs.forEach((song) => {
//       if (song.albumKey == key) {
//         // console.log(song.albumKey, "=", key, "=", song.albumKey == key ? "True" : "False")
//         albumSongs.push(song.key);
//       }
//     });
//     return albumSongs;
//   }
// };

// const getArtistAlbums = (key: string, returnSongs: boolean = false) => {
//   console.log("ArtistAlbums funcionando");
//   const assetType = key.split(":")[0];
//   let artistAlbumsArray: any = [];
//   let artistSongsArray: any = [];

//   console.log(typeof artistAlbumsArray);

//   if (assetType == "artist") {
//     console.log("Tipo Artist");
//     albums.forEach((album) => {
//       if (album.artistKey == key) {
//         // console.log(album.albumKey, "=", key, "=", album.albumKey == key ? "True" : "False")
//         artistAlbumsArray.push(album.key);
//         artistSongsArray.push(getAlbumSongs(album.key));
//       }
//     });
//   }

// const artistKey = "artist:1fc27c52-6075-508d-ad50-92ba7ac334dc"

// const artistName = getArtistName(artistKey)
// const artistSongs = getArtistAlbums(artistKey)