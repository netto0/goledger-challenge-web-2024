import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AssetListsProvider } from "./providers/assetLists.tsx";

createRoot(document.getElementById("root")!).render(
  <AssetListsProvider>
    <App />
  </AssetListsProvider>
);
