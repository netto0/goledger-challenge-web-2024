import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AssetListsProvider } from "./providers/assetLists.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AssetListsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AssetListsProvider>
);
