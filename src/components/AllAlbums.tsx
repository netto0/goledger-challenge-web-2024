import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import albumImg from "../assets/img/album.jpg";
import AddButton from "./addButton";

export default function AllAlbums() {
  const { albums } =
    React.useContext(AssetListsContext);


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
                <li key={index} className="w-full">
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
