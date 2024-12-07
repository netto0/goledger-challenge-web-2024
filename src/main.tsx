import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";
import App from "./App.tsx";
import { AssetListsProvider } from "./providers/assetLists.tsx";

createRoot(document.getElementById("root")!).render(
  <AssetListsProvider>
    <Provider>
      <App />
    </Provider>
  </AssetListsProvider>
);
