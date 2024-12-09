import React from "react";
import { AssetListsContext } from "../providers/assetLists";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal() {
    const { modalActive, setModalActive } = React.useContext(AssetListsContext);
    let modalTitle = ""
    if(modalActive == "add") {
        modalTitle = "Adicionar"
    } else if (modalActive == "delete") {
        modalTitle = "Excluir"
    } else if (modalActive == "edit") {
        modalTitle = "Editar"
    }

    const closeModal = () => {
        setModalActive(false)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#000000ee] absolute z-50 text-3xl" onClick={closeModal}>
            <div className="relative border w-1/3 h-2/3 rounded-lg px-4 py-6 bg-[#edededc2]" onClick={e => e.stopPropagation()}>
                <button className="absolute top-4 right-4" onClick={closeModal}><IoIosCloseCircleOutline /></button>
                <h2 className="text-center font-semibold">{modalTitle}</h2>
                
            </div>
        </div>
    )
}