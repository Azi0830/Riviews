import { useContext } from "react";
import Card from "./Card";
import { MovieContext } from "../context/movieContext";

const Body = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="flex flex-col items-center m-[40px]">
      {movies.map((movie) => (
        <Card key={movie.imdbid} {...movie} />
      ))}
    </div>
  );
};

export default Body;
