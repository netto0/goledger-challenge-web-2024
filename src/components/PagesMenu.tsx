import { BsPersonFill } from "react-icons/bs";
import { PiMusicNotesFill } from "react-icons/pi";
import { IoIosAlbums } from "react-icons/io";

export default function PagesMenu() {
  return (
    <div className="">
      <h2 className="font-bold text-3xl my-4">Menu</h2>
      <ul className="flex flex-col gap-5 pl-1">
        <li><a href="" className="flex items-center text-3xl gap-2 hover:text-gray-300 hover:scale-105 hover:translate-x-3 transition-all"><BsPersonFill />Artistas</a></li>
        <li><a href="" className="flex items-center text-3xl gap-2 hover:text-gray-300 hover:scale-105 hover:translate-x-3 transition-all"><PiMusicNotesFill />Músicas</a></li>
        <li><a href="" className="flex items-center text-3xl gap-2 hover:text-gray-300 hover:scale-105 hover:translate-x-3 transition-all"><IoIosAlbums />Álbums</a></li>
      </ul>
    </div>
  );
}