import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import coverImg from "../assets/img/album.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddButton from "./addButton";

export default function AllSongsPage() {
  const { songs, getAssetInfos } = React.useContext(AssetListsContext);

  const editFunc = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Função Editar")
  }
  
  const deleteFunc = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Função Deletar")
  }
  
  return (
    <>
      <div
        id="titleDiv"
        className="border flex text-4xl border-gray-700 w-full h-[10%] p-2 items-center justify-center gap-5"
      >
        <h2 className="text-3xl font-bold">MÚSICAS</h2>
        <AddButton />
      </div>
      <div
        id="mainContentDiv"
        className="border flex flex-col border-gray-700 w-full h-[90%] max-h-[90%] p-2"
      >
        {/* {JSON.stringify(songs)} */}
        <ul className="scrollable-div flex flex-col gap-3 overflow-y-auto">
          {songs?.length < 1 && (
            <h3 className="text-2xl">
              Nenhuma música foi adicionada ainda...
            </h3>
          )}
          {songs?.map((song: any, index: any) => (
            <li key={index} className="w-full">
              <div className="flex gap-4 h-20 w-full">
                <img src={coverImg} alt="albumCover" className="w-20 h-20" />
                <div className="flex w-full  items-center text-2xl gap-3">
                  <h3
                    title={song?.name}
                    className="flex text-4xl overflow-hidden text-ellipsis whitespace-nowrap h-full items-center w-[40%] "
                  >
                    {song?.name}
                  </h3>
                  <span className=" w-[40%]">{getAssetInfos(song.albumKey)[0]}</span>
                  <div className="flex text-4xl w-[20%] justify-end items-center gap-4">
                    <button className="hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0" onClick={e => editFunc(e)}>
                      <FaEdit />
                    </button>
                    <button>
                      <MdDelete className="hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0" onClick={e => deleteFunc(e)}/>
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
