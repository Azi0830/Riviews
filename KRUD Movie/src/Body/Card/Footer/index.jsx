import { Button, Input, Modal } from "antd";
import { useContext, useState } from "react";
import { MovieContext } from "../../../context/movieContext";

const Footer = ({ imdbid }) => {
  const [movies, setMovies] = useContext(MovieContext);
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    const updatedMovies = movies.map((movie) =>
      movie.imdbid === imdbid ? { ...movie, title: inputValue } : movie
    );

    setMovies(updatedMovies);
    setModal(false);
    setInputValue("");
  };

  const handleCancel = () => {
    setModal(false);
    setInputValue("");
  };

  const handleDelete = () => {
    // const updatedMovies = movies.filter((_, i) => i !== index);
    const updatedMovies = movies.filter((movie) => movie.imdbid !== imdbid);
    setMovies(updatedMovies);
  };

  return (
    <div className="flex justify-between items-center px-[10px] mb-[10px]">
      <Modal title="open" open={modal} onOk={handleOk} onCancel={handleCancel}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new title"
        />
      </Modal>
      <Button onClick={showModal}>EDIT</Button>
      <Button onClick={handleDelete} danger type="primary">
        DELETE
      </Button>
    </div>
  );
};

export default Footer;
