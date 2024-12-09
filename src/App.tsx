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

function App() {
  const {
    getArtists,
    getSongs,
    getAlbums,
    getPlaylists,
    artistKey,
    modalActive,
    loading
  } = React.useContext(AssetListsContext);

  const currentLocation = useLocation().pathname;

  useEffect(() => {
    getArtists(), getSongs(), getAlbums(), getPlaylists();
  }, []);

  return (
    <>
      <>
        {modalActive && <Modal />}
        {loading && <div className="w-screen h-screen absolute z-50 cursor-wait"/>}
        <div className="absolute filter blur-sm w-screen h-screen z-10 bg-[url('./assets/img/background.jpg')] bg-cover bg-center"/>
        <div
          id="masterDiv"
          className="absolute grid z-30 grid-cols-[1fr_3fr_1.3fr] gap-0.5 h-screen text-[#c7c7c7]"
        >
          <div
            id="leftBar"
            className="flex flex-col w-full h-screen max-h-screen"
          >
            <div
              id="searchBarDiv"
              className="flex border-gray-700 w-full min-h-[10%] px-5 py-2 items-center justify-center"
            >
              <SearchBar />
            </div>
            <div
              id="menuDiv"
              className="flex flex-col border-gray-700 w-full h-[22%] px-5 py-2"
            >
              <PagesMenu />
            </div>
            <div
              id="playlistsDiv"
              className="flex flex-col border-gray-700 w-full px-5 py-2 pr-2 flex-grow max-h-[68%]"
            >
              <Playlists />
            </div>
          </div>
          <div
            id="centerDiv"
            className="flex flex-col w-full h-screen max-h-screen"
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
            className="w-full h-screen max-h-screen"
          >
            <div
              id="userInfosDiv"
              className="flex flex-col border-gray-700 w-full h-[10%] p-2 justify-center"
            >
              <UserInfos />
            </div>
            <div
              id="sugestedAlbumsDiv"
              className="flex flex-col border-gray-700 w-full h-[90%] p-2"
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
