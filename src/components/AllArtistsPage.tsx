import React from "react";
import { AssetListsContext } from "../providers/assetLists";

export default function AllArtistsPage() {
  const { getArtistAlbums, artistKey, artists, setArtistKey } =
    React.useContext(AssetListsContext);

  const artistSongs = getArtistAlbums(artistKey, true);

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const artistKey = e.currentTarget.getAttribute('artist-key') || "Inválido";
    setArtistKey(artistKey)
  };
  

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
        className="border flex flex-col border-gray-700 w-full h-[90%] max-h-[90%] p-2"
      >
        <ul className="scrollable-div flex flex-col h-full overflow-y-auto my-2">
          {artistSongs.length < 1 && (
            <h3 className="text-2xl">
              O Artista não possui músicas adicionadas...
            </h3>
          )}
          {artists.map((artist, index) => (
              <li artist-key={artist.key} key={index} className="w-full text-2xl border-b  border-gray-400 hover:bg-[#00000010] hover:cursor-pointer active:bg-[#00000030] transition-all rounded-md" onClick={handleItemClick} value={artist.key}>
                <div
                  className="flex h-20 items-center w-full"
                >
                  <h3
                    title={artist?.name}
                    className="flex text-3xl overflow-hidden text-ellipsis whitespace-nowrap w-[50%] h-full items-center"
                  >
                    {artist?.name}
                  </h3>
                  <span className="flex h-full items-center w-[30%]">{artist?.country}</span>
                  <span className="flex h-full items-center justify-end w-[20%] text-lg pr-3">{getArtistAlbums(artist?.key, true).length} músicas</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
