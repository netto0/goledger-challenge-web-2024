import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import AddButton from "./AddButton";

export default function Playlists() {
  const { playlists, setModalActive, setModalAsset, setNewPlaylistObj } = React.useContext(AssetListsContext);

  const handleItemClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setModalActive("edit")
    setModalAsset("playlist")

    const assetInfos = JSON.parse(e.currentTarget.getAttribute("asset-infos")) || "Inválido";

    setNewPlaylistObj({
      name: assetInfos.name,
      isPrivate: assetInfos.private,
      songsArray: assetInfos.songs,
      key: assetInfos.key,
    })

  };

  return (
    <>
      <div className="flex items-center gap-5">
        <h2 className="font-bold text-3xl my-4">Playlists</h2>
        <AddButton asset="playlist" />
      </div>
      {
        <div className="scrollable-div h-full flex flex-col gap-3 overflow-y-scroll max-h-full pr-2">
          <ul className="flex flex-col pl-1 w-full">
            {playlists.map((playlist, index) => (
              <li key={index} className="w-full hover:bg-[#d3d3d310] border-b border-gray-600 hover:cursor-pointer active:bg-[#00000030] transition-all" asset-infos={JSON.stringify(playlist)} onClick={e => handleItemClick(e)}>
                <div className="flex h-14 items-center justify-between w-full">
                  <h3
                    title={playlist?.name}
                    className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap max-w-60"
                  >
                    {playlist?.name}
                  </h3>
                  <span>{JSON.parse(playlist?.songs).length} itens</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
}
