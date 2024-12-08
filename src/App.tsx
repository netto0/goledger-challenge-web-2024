import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import SearchBar from "./components/SearchBar";
import PagesMenu from "./components/PagesMenu";
import PlaylistsPreview from "./components/PlaylistsPreview";
import UserInfos from "./components/UserInfos";
import SugestedAlbums from "./components/SugestedAlbums";

function App() {
  const {
    getArtists,
    getSongs,
    getAlbums,
    getPlaylists,
    getAssetInfos,
  } = React.useContext(AssetListsContext);

  const artistKey = "artist:1fc27c52-6075-508d-ad50-92ba7ac334dc";

  const artistName = getAssetInfos(artistKey);

  useEffect(() => {
    getArtists(), getSongs(), getAlbums(), getPlaylists();
  }, []);

  return (
    <div
      id="masterDiv"
      className="grid grid-cols-[1fr_3fr_1.3fr] gap-0.5 h-screen text-[#EBEBEB]"
    >
      <div id="leftBar" className="bg-red-500 flex flex-col w-full h-full ">
        <div
          id="searchBarDiv"
          className="border flex border-gray-700 w-full min-h-[10%] px-5 py-2 items-center justify-center"
        >
          <SearchBar />
        </div>
        <div
          id="menuDiv"
          className="border flex flex-col border-gray-700 w-full h-[30%] px-5 py-2"
        >
          <PagesMenu />
        </div>
        <div
          id="playlistsDiv"
          className="border flex flex-col border-gray-700 w-full flex-grow px-5 py-2"
        >
          <PlaylistsPreview />
        </div>
      </div>
      <div id="centerDiv" className="bg-green-500 flex flex-col w-full h-full">
        {/* ========================================================================== */}
        <div
          id="titleDiv"
          className="border flex flex-col border-gray-700 w-full h-[10%] p-2 justify-center"
        >
          <h2 className="text-3xl font-bold">{artistName}</h2>
        </div>
        <div
          id="mainContentDiv"
          className="border flex flex-col border-gray-700 w-full h-[90%] p-2"
        >
          <strong>Músicas</strong>
          <ul>
            <li>Musica</li>
            <li>Musica</li>
            <li>Musica</li>
          </ul>
        </div>
        {/* ========================================================================== */}
      </div>
      <div id="rightBar" className="bg-blue-500 w-full h-full">
        <div
          id="userInfosDiv"
          className="border flex flex-col border-gray-700 w-full h-[10%] p-2 justify-center"
        >
          <UserInfos />
        </div>
        <div
          id="sugestedAlbumsDiv"
          className="border flex flex-col border-gray-700 w-full h-[90%] p-2"
        >
          <SugestedAlbums artistKey={artistKey}/>
        </div>
      </div>
    </div>
  );
}

export default App;
