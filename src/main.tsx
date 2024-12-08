import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AssetListsProvider } from "./providers/assetLists.tsx";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
// import AllArtistsPage from "./components/AllArtistsPage.tsx";
// import AllAlbumsPage from "./components/AllplaylistsPage.tsx";
// import AllSongsPage from "./components/AllSongsPage.tsx";
// import AllPlaylistsPage from "./components/AllAlbumsPage.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <AllArtistsPage /> },
//       { path: "/artists", element: <AllArtistsPage /> },
//       { path: "/albums", element: <AllAlbumsPage /> },
//       { path: "/songs", element: <AllSongsPage /> },
//       { path: "/playlists", element: <AllPlaylistsPage /> },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AssetListsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AssetListsProvider>
);
