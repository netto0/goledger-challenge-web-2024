import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import SearchBar from "./components/SearchBar";
import PagesMenu from "./components/PagesMenu";
import PlaylistsPreview from "./components/PlaylistsPreview";
import UserInfos from "./components/UserInfos";
import SugestedAlbums from "./components/SugestedAlbums";

import ArtistPage from "./components/ArtistPage";

function App() {
  const {
    getArtists,
    getSongs,
    getAlbums,
    getPlaylists,
  } = React.useContext(AssetListsContext);

  const artistKey = "artist:1fc27c52-6075-508d-ad50-92ba7ac334dc";

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
        <ArtistPage />
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
          <SugestedAlbums artistKey={artistKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
