import React from "react";
import Footer from "./Footer";

const Card = ({
  imageurl,
  title,
  genre,
  synopsis,
  onDelete,
  id,
  imdbrating,
  released,
}) => {
  return (
    <div className="w-[300px] h-full flex flex-col gap-[15px]  border">
      <img className="h-[300px] w-full" src={imageurl} alt="avatar" />
      <div className="flex justify-between items-center px-[10px] mt-2">
        <h3>{title}</h3>
        <h3>{released}</h3>
      </div>
      <div className="flex justify-between items-center px-[10px] mt-2">
        <h3>{genre}</h3>
        <h3>{imdbrating}</h3>
      </div>
      <p className="px-[10px] mt-2">{synopsis}</p>
      <Footer onDelete={onDelete} id={id} />
    </div>
  );
};

export default Card;
