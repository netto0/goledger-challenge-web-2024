import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import coverImg from "../assets/img/album.jpg";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ArtistPage() {
  const { getAssetInfos, getArtistAlbums, artistKey } =
    React.useContext(AssetListsContext);

  const artistSongs = getArtistAlbums(artistKey, true);
  const artistName = getAssetInfos(artistKey);

  return (
    <>
      <div
        id="titleDiv"
        className="border flex flex-col border-gray-700 w-full h-[10%] p-2 justify-center"
      >
        <h2 className="text-3xl font-bold">{artistName}</h2>
      </div>
      <div
        id="mainContentDiv"
        className="border flex flex-col border-gray-700 w-full h-[90%] p-2"
      >
        <h2 className="font-bold text-3xl my-4">Músicas</h2>
        <ul className="flex flex-col gap-3">
          {artistSongs.length < 1 && (
            <h3 className="text-2xl">
              O Artista não possui músicas adicionadas...
            </h3>
          )}
          {artistSongs?.map((song: any, index: any) => (
            <li key={index} className="w-full">
              <div className="flex gap-4 h-20 w-full">
                <img src={coverImg} alt="albumCover" className="w-20 h-20" />
                <div className="flex w-full  items-center text-2xl">
                  <h3
                    title={getAssetInfos(song)[0]}
                    className="flex text-4xl overflow-hidden text-ellipsis whitespace-nowrap h-full items-center w-[40%] "
                  >
                    {getAssetInfos(song)[0]}
                  </h3>
                  <span className=" w-[40%]">{getAssetInfos(song)[1]}</span>
                  <div className="flex text-4xl w-[20%] justify-end items-center gap-4">
                    <button className="hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0">
                      <FaEdit />
                    </button>
                    <button>
                      <MdDelete className="hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
