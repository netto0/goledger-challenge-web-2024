import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="relative h-4/5">
      <input
        className="bg-[#bebebe30] rounded-full h-full w-full outline-none px-5 text-3xl placeholder-gray-300"
        autoComplete="off"
        type="text"
        placeholder="Buscar..."
        name="searchBar"
        id="searchBar"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <LuSearch className="absolute top-1/2 translate-y-[-50%] right-3 w-8 h-8"/>
    </div>
  );
}
