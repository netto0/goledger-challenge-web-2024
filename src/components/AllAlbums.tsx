import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import albumImg from "../assets/img/album.jpg";
import AddButton from "./AddButton";

export default function AllAlbums() {
  const { albums, setModalActive, setModalAsset, setNewAlbumObj } =
    React.useContext(AssetListsContext);

    const handleItemClick = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
  
      setModalActive("edit")
      setModalAsset("album")
  
      const assetInfos = JSON.parse(e.currentTarget.getAttribute("asset-infos")) || "Inválido";
  
      setNewAlbumObj({
        name: assetInfos.name,
        year: assetInfos.year,
        artistKey: assetInfos.artistKey,
        key: assetInfos.key,
      })

      console.log("Função Editar");
    };
  

  return (
    <>
      <div className="flex items-center gap-5">
        <h2 className="font-bold text-3xl my-4">Álbums</h2>
        <AddButton asset="album" />
      </div>
        <div className="flex flex-col gap-3 h-[90%] max-h-[90%]">
          <ul className="scrollable-div flex flex-col gap-2 pl-1 w-full overflow-y-auto mt-2 -mb-3">
          {albums.length < 1 && (
            <h3 className="text-2xl">
              Nenhum álbum foi adicionado ainda...
            </h3>
          )}
            {albums?.map((album: any, index: any) => (
                <li key={index} className="w-full hover:bg-[#d3d3d310] border-b border-gray-600 hover:cursor-pointer active:bg-[#00000030] transition-all" asset-infos={JSON.stringify(album)} onClick={handleItemClick}>
                  <div className="flex gap-3 h-20 w-full">
                    <img
                      src={albumImg}
                      alt="albumCover"
                      className="w-20 h-20"
                    />
                    <div className="flex flex-col w-full justify-center">
                      <h3
                        title={album?.name}
                        className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap max-w-60"
                      >
                        {album?.name}
                      </h3>
                      <span>Album - {album?.year}</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
    </>
  );
}
