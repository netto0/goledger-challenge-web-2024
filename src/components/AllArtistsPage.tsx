import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AllArtistsPage() {
  const { getArtistAlbums, artists, setArtistKey } =
    React.useContext(AssetListsContext);

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const artistKey = e.currentTarget.getAttribute('artist-key') || "Inválido";
    setArtistKey(artistKey)
  };
  
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
        className="border flex flex-col border-gray-700 w-full h-[10%] max-h-[10%] p-2 justify-center"
      >
        <h2 className="text-3xl font-bold">ARTISTAS</h2>
      </div>
      <div
        id="mainContentDiv"
        className="border flex flex-col border-gray-700 w-full h-[90%] max-h-[90%] px-2"
      >
        <ul className="scrollable-div flex flex-col h-full overflow-y-auto my-2">
          {artists.map((artist, index) => (
              <Link to="/artist" artist-key={artist.key} key={index} className="w-full text-2xl border-b  border-gray-400 hover:bg-[#00000010] hover:cursor-pointer active:bg-[#00000030] transition-all rounded-md" onClick={e => handleItemClick(e)}>
                <div
                  className="flex h-20 items-center w-full gap-3"
                >
                  <h3
                    title={artist?.name}
                    className="flex text-3xl overflow-hidden text-ellipsis whitespace-nowrap w-[50%] h-full items-center"
                  >
                    {artist?.name}
                  </h3>
                  <span className="flex h-full items-center w-[30%]">{artist?.country}</span>
                  <span className="flex h-full items-center justify-end w-[20%] text-lg pr-3">{getArtistAlbums(artist?.key, true).length} músicas</span>
                <div className="flex text-4xl w-[20%] justify-end items-center gap-4">
                    <button className="hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0" onClick={e => editFunc(e)}>
                      <FaEdit />
                    </button>
                    <button>
                      <MdDelete className="hover:text-gray-300 hover:scale-105 hover:-translate-y-1 transition-all active:text-gray-500 active:scale-95 active:-translate-y-0" onClick={e => deleteFunc(e)}/>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
}
