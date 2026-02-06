import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, IsOpenCheck] = useState(false);

  return (
    <nav className="flex justify-around flex-wrap p-8 border-b-4 border-red-500/50 text-terror">
      <div className="text-center flex flex-col lg:w-[40%]">
        <h1 className="text-2xl lg:text-4xl font-bold [text-shadow:0_0_50px_#ff0000,0_0_50px_#ff0000] lg:mb-2 tracking-widest ">
          STEPHEN KING
        </h1>
        <p className="text-sm lg:text-lg opacity-60">Biblioteca del Terror</p>
      </div>
      <button
        className="w-12 text-2xl lg:hidden cursor-pointer hover:text-amber-300"
        onClick={() => IsOpenCheck(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}{" "}
      </button>
      <ul
        className={`flex flex-col lg:flex-row justify-around items-center  lg:w-[60%] w-full lg:flex ${isOpen ? "flex" : "hidden"}`}
      >
        <li className="flex-1 text-center hover:bg-green-500 mt-4 lg:mt-0 text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="flex-1 text-center hover:bg-green-500 mt-3 mb-3 text-2xl">
          <Link to="/ejemplo1">Ejemplo1</Link>
        </li>
        <li className="flex-1 text-center hover:bg-green-500 text-2xl">
          <Link to="/ejemplo2">Ejemplo2</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
