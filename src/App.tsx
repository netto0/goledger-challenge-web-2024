import React, { useEffect } from "react";
import "./App.css";
import { AssetListsContext } from "./providers/assetLists";

function App() {
  const {getArtists, artists} = React.useContext(AssetListsContext)
  
  // 
  useEffect(() => {getArtists()},[])

  return (
    <>
      <h1>Lista de artistas</h1>
      <p>{JSON.stringify(artists)}</p>
    </>
  );
}

export default App;
