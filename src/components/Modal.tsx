import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import { IoIosCloseCircleOutline } from "react-icons/io";

function ContentArtistModal() {
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
      />
      <label htmlFor="artistCountry" className="text-2xl text-gray-900 mb-2">
        País:
      </label>
      <input
        id="artistCountry"
        type="text"
        placeholder="Digite o país..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
      />
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button className="rounded-md py-2 px-6 bg-green-500 text-green-950">
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentSongModal() {
  const { albums } = React.useContext(AssetListsContext);

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
      />
      <label htmlFor="artistCountry" className="text-2xl text-gray-900 mb-2">
        Álbum:
      </label>

      <select
        id="selectAlbum"
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
      >
        {albums.map((album, index) => (
          <option key={index} value={album.key}>
            {album.name}
          </option>
        ))}
      </select>
      {/* <input id="artistCountry" type="text" placeholder="Digite o país..." className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"/> */}
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button className="rounded-md py-2 px-6 bg-green-500 text-green-950">
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentAlbumModal() {
  const { artists } = React.useContext(AssetListsContext);

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
      />
      <label htmlFor="albumYear" className="text-2xl text-gray-900 mb-2">
        Ano:
      </label>
      <input
        id="albumYear"
        type="number"
        placeholder="Digite o ano..."
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"
      />

      <label htmlFor="artistCountry" className="text-2xl text-gray-900 mb-2">
        Artista:
      </label>
      <select
        id="selectAlbum"
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
      >
        {artists.map((artist, index) => (
          <option key={index} value={artist.key}>
            {artist.name}
          </option>
        ))}
      </select>
      {/* <input id="artistCountry" type="text" placeholder="Digite o país..." className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4"/> */}
      <div className="flex justify-center gap-5">
        <button className="rounded-md py-2 px-6 bg-red-500 text-red-950">
          Cancelar
        </button>
        <button className="rounded-md py-2 px-6 bg-green-500 text-green-950">
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ContentPlaylistModal() {
  const { songs } = React.useContext(AssetListsContext);

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
      />

      <div className="flex items-center h-full gap-2 mb-2">
        <label
          htmlFor="playlistPrivate"
          className="text-2xl text-gray-900 mb-2"
        >
          Private:
        </label>
        <input id="playlistPrivate" type="checkbox" />
      </div>

      <label htmlFor="songsArray" className="text-2xl text-gray-900 mb-2">
        Músicas:
      </label>
      <select
        id="songsArray"
        multiple
        className="rounded-lg text-2xl py-3 px-2 placeholder:text-gray-400 mb-4 outline-none"
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
        <button className="rounded-md py-2 px-6 bg-green-500 text-green-950">
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
  if (modalActive == "add") {
    modalTitle = "Adicionar";
  } else if (modalActive == "delete") {
    modalTitle = "Excluir";
  } else if (modalActive == "edit") {
    modalTitle = "Editar";
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
          {modalTitle} {modalAsset || "False"}
        </h2>

        {modalAsset == "artist" && <ContentArtistModal />}
        {modalAsset == "song" && <ContentSongModal />}
        {modalAsset == "album" && <ContentAlbumModal />}
        {modalAsset == "playlist" && <ContentPlaylistModal />}
      </div>
    </div>
  );
}
