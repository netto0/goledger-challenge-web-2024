import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AssetListsContext } from "../providers/assetLists";
import { AssetType } from "../types/assetType";

interface IProps {
  asset: AssetType | boolean
}

export default function AddButton({asset}: IProps) {
  const { setModalActive, setModalAsset } = React.useContext(AssetListsContext);

  const addFunc = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setModalAsset(asset)
    console.log("Função Adicionar");
    setModalActive("add")
  };

  return (
    <button
      className="outline-none text-4xl hover:text-gray-300 hover:scale-105 transition-all active:text-gray-500 active:scale-95"
      onClick={(e) => addFunc(e)}
    >
      <BsPlusCircle />
    </button>
  );
}
