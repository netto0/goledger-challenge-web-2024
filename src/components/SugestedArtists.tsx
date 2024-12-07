import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import albumImg from "../assets/img/album.jpg";

function genRandomArray(max: number): number[] {
  const randomNumbers = new Set<number>();

  while (randomNumbers.size < Math.min(max, 8)) {
    const randomNumber = Math.floor(Math.random() * max);
    randomNumbers.add(randomNumber);
  }

  return Array.from(randomNumbers);
}

export default function SugestedArtists() {
  const { albums } = React.useContext(AssetListsContext);

  const maxNumber = albums.length - 1;
  const randomArray = genRandomArray(maxNumber);

  return (
    <>
      <h2 className="font-bold text-3xl my-4">Discografia</h2>
      {
        <div className="h-full flex flex-col gap-3">
          <ul className="flex flex-col gap-2 pl-1 w-full">
            {randomArray.map((number, index) => (
              <li key={index} className="w-full">
                <a
                  href=""
                  className="flex gap-3 h-20 w-full"
                >
                  <img src={albumImg} alt="albumCover" className="w-20 h-20" />
                  <div className="flex flex-col w-full justify-center">
                    <h3 title={albums[number] != undefined && albums[number].name} className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap max-w-60">
                      {albums[number] != undefined && albums[number].name}
                    </h3>
                    <span>Album - {albums[number].year}</span>
                  </div>
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
