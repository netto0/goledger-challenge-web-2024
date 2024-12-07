import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";
import Tests from "./components/Tests";

function App() {
  const {getArtists, getSongs, getAlbums, getPlaylists} = React.useContext(AssetListsContext)

  useEffect(() => {getArtists(), getSongs(), getAlbums(), getPlaylists()},[])

  return (
    <>
      <Tests />
    </>
  );
}

export default App;

// [{"@key": "song:21fb21f9-bca2-5734-9c7d-9a9b3d989cd7"}, {"@key": "song:229816cc-8f4c-51c1-9c0f-2375c6d51375"}, {"@key": "song:2545d178-4ab1-582a-a93f-b049fe279ff0"}]