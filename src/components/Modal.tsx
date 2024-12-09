import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  addArtistService,
  updateArtistService,
} from "../api/services/artistServices";
import { addSongService } from "../api/services/songServices";
import {
  addAlbumService,
  updateAlbumService,
} from "../api/services/albumServices";
import { addPlaylistService } from "../api/services/playlistServices";
import { SongType } from "../types/SongType";
import { MdDelete } from "react-icons/md";
import { deleteItem } from "../api/axios";

const deleteFunc = (e: any) => {
  e.preventDefault();
  e.stopPropagation();

  const itemKey = e.currentTarget.getAttribute("item-key") || "Inválido";
  deleteItem(itemKey);
};

function ContentArtistModal() {
  const { newArtistObj, setNewArtistObj, modalActive, setLoading } =
    React.useContext(AssetListsContext);

  return (
    <div className="flex flex-col">
      <label htmlFor="artistName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="artistName"
        type="text"
        placeholder="Digite o nome..."
        readOnly={modalActive == "edit"}
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
        onChange={(e) =>
          setNewArtistObj({ ...newArtistObj, name: e.target.value })
        }
        value={newArtistObj.name}
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
        value={newArtistObj.country}
      />
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        {modalActive == "add" && (
          <button
            className="rounded-md py-2 px-6 bg-green-500 text-green-950"
            onClick={() => {
              setLoading(true);
              addArtistService(newArtistObj.name, newArtistObj.country);
            }}
          >
            Adicionar
          </button>
        )}
        {modalActive == "edit" && (
          <button
            className="rounded-md py-2 px-6 bg-green-500 text-green-950"
            onClick={() => {
              setLoading(true);
              updateArtistService(newArtistObj.key, newArtistObj.country);
            }}
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}

function ContentSongModal() {
  const { albums, newSongObj, setNewSongObj, setLoading } =
    React.useContext(AssetListsContext);

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
        value={newSongObj.name}
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
          onClick={() => {
            setLoading(true),
              addSongService(newSongObj.name, newSongObj.albumKey);
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentAlbumModal() {
  const { artists, newAlbumObj, setNewAlbumObj, modalActive, setLoading } =
    React.useContext(AssetListsContext);

  return (
    <div className="flex flex-col relative">
      <MdDelete
        item-key={newAlbumObj.key}
        className="text-3xl absolute bottom-0 hover:cursor-pointer hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0"
        onClick={(e) => deleteFunc(e)}
      />
      <label htmlFor="albumName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="albumName"
        type="text"
        placeholder="Digite o nome..."
        readOnly={modalActive == "edit"}
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
        onChange={(e) =>
          setNewAlbumObj({ ...newAlbumObj, name: e.target.value })
        }
        value={newAlbumObj.name}
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
        value={newAlbumObj.year}
      />
      {modalActive == "add" && (
        <>
          <label
            htmlFor="artistCountry"
            className="text-2xl text-gray-900 mb-2"
          >
            Artista:
          </label>
          <select
            id="selectAlbum"
            className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
            onChange={(e) =>
              setNewAlbumObj({ ...newAlbumObj, artistKey: e.target.value })
            }
            value={newAlbumObj.artistKey}
          >
            {artists.map((artist, index) => (
              <option key={index} value={artist.key}>
                {artist.name}
              </option>
            ))}
          </select>
        </>
      )}

      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        {modalActive == "add" && (
          <button
            className="rounded-md py-2 px-6 bg-green-500 text-green-950"
            onClick={() => {
              setLoading(true)
              addAlbumService(
                newAlbumObj.name,
                parseInt(newAlbumObj.year),
                newAlbumObj.artistKey
              )
            }
            }
          >
            Adicionar
          </button>
        )}
        {modalActive == "edit" && (
          <button
            className="rounded-md py-2 px-6 bg-green-500 text-green-950"
            onClick={() => {
              setLoading(true)
              updateAlbumService(newAlbumObj.key, newAlbumObj.year);
            }}
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}

function ContentPlaylistModal() {
  const { songs, newPlaylistObj, setNewPlaylistObj, modalActive } =
    React.useContext(AssetListsContext);

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

  let songsKeysArray: any = [];

  if (typeof newPlaylistObj.songsArray === "string") {
    try {
      JSON.parse(newPlaylistObj.songsArray).forEach((song: any) =>
        songsKeysArray.push(song["@key"])
      );
    } catch (error) {
      console.error("Erro ao parsear songsArray:", error);
    }
  } else if (Array.isArray(newPlaylistObj.songsArray)) {
    newPlaylistObj.songsArray.forEach((song: any) =>
      songsKeysArray.push(song["@key"])
    );
  }

  return (
    <div className="flex relative flex-col">
      <MdDelete
        item-key={newPlaylistObj.key}
        className="text-3xl absolute bottom-0 hover:cursor-pointer hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0"
        onClick={(e) => deleteFunc(e)}
      />
      <label htmlFor="playlistName" className="text-2xl text-gray-900 mb-2">
        Nome:
      </label>
      <input
        id="playlistName"
        type="text"
        placeholder="Digite o nome..."
        readOnly={modalActive == "edit"}
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
        value={newPlaylistObj.name}
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
          <option
            key={index}
            value={song.key}
            className={songsKeysArray.includes(song.key) && "bg-blue-500"}
          >
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
  const {
    modalActive,
    setModalActive,
    modalAsset,
    setNewArtistObj,
    setNewAlbumObj,
    setNewSongObj,
    setNewPlaylistObj
  } = React.useContext(AssetListsContext);
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
    setNewArtistObj({
      name: "",
      country: "",
      key: "",
    });
    setNewAlbumObj({
      name: "",
      year: "",
      artistKey: "",
      key: "",
    });
    setNewSongObj({
      name: "",
      albumKey: "",
      key: "",
    });
    setNewPlaylistObj({
      name: "",
      isPrivate: false,
      songsArray: [] as SongType[],
      key: "",
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#000000ee] absolute z-40 text-3xl text-gray-900" onClick={closeModal}> 
      <div
        className="relative border w-1/3 h-fit rounded-lg px-4 py-6 bg-[#edededc2]"
        onClick={(e) => {e.stopPropagation()}}
      >
        <button className="absolute top-4 right-4" onClick={() => closeModal()}>
          <IoIosCloseCircleOutline />
        </button>
        <h2 className="text-center font-semibold">
          {modalTitle} {assetTitle || "False"}
        </h2>

        {modalAsset == "artist" && <ContentArtistModal/>}
        {modalAsset == "song" && <ContentSongModal />}
        {modalAsset == "album" && <ContentAlbumModal />}
        {modalAsset == "playlist" && <ContentPlaylistModal />}
      </div>
    </div>
  );
}
