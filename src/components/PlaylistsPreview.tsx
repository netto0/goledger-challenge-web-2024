import React from "react";
import { AssetListsContext } from "../providers/assetLists";

function genRandomArray(max: number): number[] {
  const randomNumbers = new Set<number>();

  while (randomNumbers.size < Math.min(max, 7)) {
    const randomNumber = Math.floor(Math.random() * max);
    randomNumbers.add(randomNumber);
  }

  return Array.from(randomNumbers);
}

export default function PlaylistsPreview() {
  const { playlists } = React.useContext(AssetListsContext);

  const maxNumber = playlists.length - 1;
  const randomArray = genRandomArray(maxNumber);

  return (
    <>
      <h2 className="font-bold text-3xl my-4">Playlists</h2>
      {
        <div className="h-full flex flex-col gap-3">
          <ul className="flex flex-col pl-1">
            {randomArray.map((number, index) => (
              <li key={index} className="">
                <a href="" className="flex h-14 items-center justify-between">
                  <h3 className="text-3xl">
                    {playlists[number] != undefined && playlists[number].name}
                  </h3>
                  <span>
                    {
                      JSON.parse(
                        playlists[number] != undefined &&
                          playlists[number].songs
                      ).length
                    }{" "}
                    itens
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href=""
            className="w-full flex justify-end underline font-semibold"
          >
            Ver todas
          </a>
        </div>
      }
    </>
  );
}
