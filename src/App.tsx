import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import SearchBar from "./components/SearchBar";
import PagesMenu from "./components/PagesMenu";

function App() {
  const {getArtists, getSongs, getAlbums, getPlaylists} = React.useContext(AssetListsContext)

  useEffect(() => {getArtists(), getSongs(), getAlbums(), getPlaylists()},[])

  return (
    <div id="masterDiv" className="grid grid-cols-[1fr_3fr_1.3fr] gap-0.5 h-screen text-[#EBEBEB]">
      <div id="leftBar" className="bg-red-500 flex flex-col w-full h-full ">
        <div id="searchBarDiv" className="border flex border-gray-700 w-full h-[10%] px-5 py-2 items-center justify-center">
          <SearchBar />
        </div>
        <div id="menuDiv" className="border flex flex-col border-gray-700 w-full h-fit px-5 py-2">
          <PagesMenu />
        </div>
        <div id="playlistsDiv" className="border flex flex-col border-gray-700 w-full flex-grow px-5 py-2">
          <strong>Playlists</strong>
          <ul>
            <li>Playlist</li>
            <li>Playlist</li>
            <li>Playlist</li>
          </ul>
        </div>
      </div>
      <div id="centerDiv" className="bg-green-500 flex flex-col w-full h-full">
        <div id="titleDiv" className="border flex flex-col border-gray-700 w-full h-[10%] p-2 justify-center">NOME DO ARTISTA</div>
        <div id="mainContentDiv" className="border flex flex-col border-gray-700 w-full h-[90%] p-2">
          <strong>Músicas</strong>
          <ul>
            <li>Musica</li>
            <li>Musica</li>
            <li>Musica</li>
          </ul>
        </div>
      </div>
      <div id="rightBar" className="bg-blue-500 w-full h-full">
        <div id="userInfosDiv" className="border flex flex-col border-gray-700 w-full h-[10%] p-2 justify-center">foto USUÁRIO</div>
        <div id="sugestedArtistsDiv" className="border flex flex-col border-gray-700 w-full h-[90%] p-2">
          <strong>Artistas sugeridos</strong>
          <ul>
            <li>Artista</li>
            <li>Artista</li>
            <li>Artista</li>
            <li>Artista</li>
            <li>Artista</li>
            <li>Artista</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;