import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import SearchBar from "./components/SearchBar";
import PagesMenu from "./components/PagesMenu";
import UserInfos from "./components/UserInfos";

import AllArtistsPage from "./components/AllArtistsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import AllSongsPage from "./components/AllSongsPage";
import ArtistPage from "./components/ArtistPage";
import AllArtistAlbums from "./components/AllArtistAlbums";
import AllAlbums from "./components/AllAlbums";
import Playlists from "./components/Playlists";
import Modal from "./components/Modal";
import { deleteItem } from "./api/axios";
// import Tests from "./components/Tests";

function App() {
  const {
    getArtists,
    getSongs,
    getAlbums,
    getPlaylists,
    artistKey,
    modalActive,
  } = React.useContext(AssetListsContext);

  const currentLocation = useLocation().pathname;

  useEffect(() => {
    getArtists(), getSongs(), getAlbums(), getPlaylists();
  }, []);

  return (
    <>
      {/* <Tests /> */}
      <button onClick={()=>deleteItem("song:030cf497-7861-5155-b4c4-bef133fdca94")}>DELETAR</button>
      <>
        {modalActive && <Modal />}
        <div
          id="masterDiv"
          className="grid grid-cols-[1fr_3fr_1.3fr] gap-0.5 h-screen text-[#EBEBEB]"
        >
          <div
            id="leftBar"
            className="bg-red-500 flex flex-col w-full h-screen max-h-screen"
          >
            <div
              id="searchBarDiv"
              className="border flex border-gray-700 w-full min-h-[10%] px-5 py-2 items-center justify-center"
            >
              <SearchBar />
            </div>
            <div
              id="menuDiv"
              className="border flex flex-col border-gray-700 w-full h-[22%] px-5 py-2"
            >
              <PagesMenu />
            </div>
            <div
              id="playlistsDiv"
              className="border flex flex-col border-gray-700 w-full px-5 py-2 pr-2 flex-grow max-h-[68%]"
            >
              <Playlists />
            </div>
          </div>
          <div
            id="centerDiv"
            className="bg-green-500 flex flex-col w-full h-screen max-h-screen"
          >
            <Routes>
              <Route path="/" element={<AllArtistsPage />} />
              <Route path="/artist" element={<ArtistPage />} />
              <Route path="/artists" element={<AllArtistsPage />} />
              <Route path="/songs" element={<AllSongsPage />} />
            </Routes>
          </div>
          <div
            id="rightBar"
            className="bg-blue-500 w-full h-screen max-h-screen"
          >
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
              {currentLocation == "/artist" ? (
                <AllArtistAlbums artistKey={artistKey} />
              ) : (
                <AllAlbums />
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
