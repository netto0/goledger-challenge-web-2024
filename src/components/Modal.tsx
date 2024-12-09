import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { addArtistService } from "../api/services/artistServices";
import { addSongService } from "../api/services/songServices";
import { addAlbumService } from "../api/services/albumServices";
import { addPlaylistService } from "../api/services/playlistServices";
import { SongType } from "../types/SongType";

function ContentArtistModal() {
  const { newArtistObj, setNewArtistObj } = React.useContext(AssetListsContext);

  return (
    <div className="flex flex-col">
      <label htmlFor="artistName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="artistName"
        type="text"
        placeholder="Digite o nome..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
        onChange={(e) =>
          setNewArtistObj({ ...newArtistObj, name: e.target.value })
        }
      />
      <label htmlFor="artistCountry" className="text-2xl text-gray-900 mb-2">
        País:
      </label>
      <input
        id="artistCountry"
        type="text"
        placeholder="Digite o país..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
        onChange={(e) =>
          setNewArtistObj({ ...newArtistObj, country: e.target.value })
        }
      />
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button
          className="rounded-md py-2 px-6 bg-green-500 text-green-950"
          onClick={() =>
            addArtistService(newArtistObj.name, newArtistObj.country)
          }
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentSongModal() {
  const { albums, newSongObj, setNewSongObj } = React.useContext(AssetListsContext);

  return (
    <div className="flex flex-col">
      <label htmlFor="artistName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="artistName"
        type="text"
        placeholder="Digite o nome..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
        onChange={(e) => setNewSongObj({ ...newSongObj, name: e.target.value })}
      />
      <label htmlFor="artistCountry" className="text-2xl text-gray-900 mb-2">
        Álbum:
      </label>

      <select
        id="selectAlbum"
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
        onChange={(e) =>
          setNewSongObj({ ...newSongObj, albumKey: e.target.value })
        }
      >
        {albums.map((album, index) => (
          <option key={index} value={album.key}>
            {album.name}
          </option>
        ))}
      </select>
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button
          className="rounded-md py-2 px-6 bg-green-500 text-green-950"
          onClick={() => addSongService(newSongObj.name, newSongObj.albumKey)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentAlbumModal() {
  const { artists, newAlbumObj, setNewAlbumObj } = React.useContext(AssetListsContext);

  return (
    <div className="flex flex-col">
      <label htmlFor="albumName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="albumName"
        type="text"
        placeholder="Digite o nome..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
        onChange={(e) =>
          setNewAlbumObj({ ...newAlbumObj, name: e.target.value })
        }
      />
      <label htmlFor="albumYear" className="text-2xl text-gray-900 mb-2">
        Ano:
      </label>
      <input
        id="albumYear"
        type="number"
        placeholder="Digite o ano..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
        onChange={(e) =>
          setNewAlbumObj({ ...newAlbumObj, year: e.target.value })
        }
      />

      <label htmlFor="artistCountry" className="text-2xl text-gray-900 mb-2">
        Artista:
      </label>
      <select
        id="selectAlbum"
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
        onChange={(e) =>
          setNewAlbumObj({ ...newAlbumObj, artistKey: e.target.value })
        }
      >
        {artists.map((artist, index) => (
          <option key={index} value={artist.key}>
            {artist.name}
          </option>
        ))}
      </select>
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button
          className="rounded-md py-2 px-6 bg-green-500 text-green-950"
          onClick={() =>
            addAlbumService(
              newAlbumObj.name,
              parseInt(newAlbumObj.year),
              newAlbumObj.artistKey
            )
          }
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentPlaylistModal() {
  const { songs, newPlaylistObj, setNewPlaylistObj } = React.useContext(AssetListsContext);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues: SongType[] = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push({ "@assetType": "song", "@key": options[i].value });
      }
    }

    setNewPlaylistObj({ ...newPlaylistObj, songsArray: selectedValues });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="playlistName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="playlistName"
        type="text"
        placeholder="Digite o nome..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
        onChange={(e) =>
          setNewPlaylistObj({ ...newPlaylistObj, name: e.target.value })
        }
      />

      <div className="flex items-center h-full gap-2 mb-2">
        <label
          htmlFor="playlistPrivate"
          className="text-2xl text-gray-900 mb-2"
        >
          Private:
        </label>
        <input
          id="playlistPrivate"
          type="checkbox"
          checked={newPlaylistObj.isPrivate}
          onChange={() =>
            setNewPlaylistObj({
              ...newPlaylistObj,
              isPrivate: !newPlaylistObj.isPrivate,
            })
          }
        />
      </div>

      <label htmlFor="songsArray" className="text-2xl text-gray-900 mb-2">
        Músicas:
      </label>
      <select
        id="songsArray"
        multiple
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
        onChange={(e) => handleSelectChange(e)}
      >
        {songs.map((song, index) => (
          <option key={index} value={song.key}>
            {song.name}
          </option>
        ))}
      </select>
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button
          className="rounded-md py-2 px-6 bg-green-500 text-green-950"
          onClick={() =>
            addPlaylistService(
              newPlaylistObj.name,
              newPlaylistObj.isPrivate,
              newPlaylistObj.songsArray
            )
          }
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default function Modal() {
  const { modalActive, setModalActive, modalAsset } =
    React.useContext(AssetListsContext);
  let modalTitle = "";
  let assetTitle = "";
  
  if (modalActive == "add") {
    modalTitle = "Adicionar";
  } else if (modalActive == "delete") {
    modalTitle = "Excluir";
  } else if (modalActive == "edit") {
    modalTitle = "Editar";
  }

  if (modalAsset == "artist") {
    assetTitle = "Artista";
  } else if (modalAsset == "album") {
    assetTitle = "Álbum";
  } else if (modalAsset == "song") {
    assetTitle = "Música";
  } else if (modalAsset == "playlist") {
    assetTitle = "Playlist";
  }

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-[#000000ee] absolute z-50 text-3xl text-gray-900"
      onClick={closeModal}
    >
      <div
        className="relative border w-1/3 h-fit rounded-lg px-4 py-6 bg-[#edededc2]"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4" onClick={closeModal}>
          <IoIosCloseCircleOutline />
        </button>
        <h2 className="text-center font-semibold">
          {modalTitle} {assetTitle || "False"}
        </h2>

        {modalAsset == "artist" && <ContentArtistModal />}
        {modalAsset == "song" && <ContentSongModal />}
        {modalAsset == "album" && <ContentAlbumModal />}
        {modalAsset == "playlist" && <ContentPlaylistModal />}
      </div>
    </div>
  );
}
