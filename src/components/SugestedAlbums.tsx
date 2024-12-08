import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import albumImg from "../assets/img/album.jpg";

// function genRandomArray(max: number): number[] {
//   const randomNumbers = new Set<number>();

//   while (randomNumbers.size < Math.min(max, 8)) {
//     const randomNumber = Math.floor(Math.random() * max);
//     randomNumbers.add(randomNumber);
//   }

//   return Array.from(randomNumbers);
// }

interface IProps {
  artistKey: string;
}

export default function SugestedAlbums(props: IProps) {
  const { getArtistAlbums, getAssetInfos } =
    React.useContext(AssetListsContext);

  // const maxNumber = albums.length - 1;
  // const randomArray = genRandomArray(maxNumber);
  const artistAlbums = getArtistAlbums(props.artistKey);
  console.log(artistAlbums);
  return (
    <>
      <h2 className="font-bold text-3xl my-4">Discografia</h2>
        <div className="h-full flex flex-col gap-3">
          <ul className="flex flex-col gap-2 pl-1 w-full">
            {artistAlbums.length > 0 &&
              artistAlbums.map((album: any, index: any) => (
                <li key={index} className="w-full">
                  <a href="" className="flex gap-3 h-20 w-full">
                    <img
                      src={albumImg}
                      alt="albumCover"
                      className="w-20 h-20"
                    />
                    <div className="flex flex-col w-full justify-center">
                      <h3
                        title={album != undefined && album.name}
                        className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap max-w-60"
                      >
                        {album && getAssetInfos(album)[0]}
                      </h3>
                      <span>Album - {getAssetInfos(album)[1]}</span>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
          {artistAlbums.length >= 8 && (
            <a
              href=""
              className="w-full flex justify-end underline font-semibold"
            >
              Ver todas
            </a>
          )}
        </div>
    </>
  );
}
