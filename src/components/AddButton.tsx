import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AssetListsContext } from "../providers/assetLists";

export default function AddButton() {
  const { modalActive, setModalActive } = React.useContext(AssetListsContext);

  const addFunc = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Função Adicionar");
    setModalActive("add")
  };

  return (
    <button
      className="outline-none hover:text-gray-300 hover:scale-105 transition-all active:text-gray-500 active:scale-95"
      onClick={(e) => addFunc(e)}
    >
      <BsPlusCircle />
      {/* {modalActive ? "Sim" : "Não"} */}
    </button>
  );
}
