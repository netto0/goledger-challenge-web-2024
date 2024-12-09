import { BsPlusCircle } from "react-icons/bs";

export default function AddButton() {
  const addFunc = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Função Adicionar");
  };

  return (
    <button
      className="outline-none hover:text-gray-300 hover:scale-105 transition-all active:text-gray-500 active:scale-95"
      onClick={(e) => addFunc(e)}
    >
      <BsPlusCircle />
    </button>
  );
}
