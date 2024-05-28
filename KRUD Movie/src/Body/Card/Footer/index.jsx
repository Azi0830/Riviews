import { Button, Modal } from "antd";
import { useContext, useState } from "react";
import { MovieContext } from "../../../context/movieContext";

const Footer = ({ id }) => {
  const [movies, setMovies] = useContext(MovieContext);
  const [modal, setModal] = useState(false);

  openModal(() => {
    setModal(true);
  });

  return (
    <div className="flex justify-between items-center px-[10px] mb-[10px]">
      <Modal />
      <Button onClick={openModal}>EDIT</Button>
      <Button
        onClick={() => setMovies(movies.filter((value) => value.id !== id))}
        danger
        type="primary"
      >
        DELETE
      </Button>
    </div>
  );
};

export default Footer;
