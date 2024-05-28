import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Navbar = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="bg-green-400 flex justify-between items-center w-full h-[80px] px-[40px]">
      <h3>O'zbek kino</h3>
      <h3>Kino soni:{movies.length}</h3>
    </div>
  );
};

export default Navbar;
