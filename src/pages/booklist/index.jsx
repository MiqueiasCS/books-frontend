import { Container } from "./styles";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal";

export const Books = () => {
  const [booklist, setBookList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [book, setBook] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const handleModalClick = (item) => {
    setBook(item);
    setOpenModal(true);
  };

  const handlePage = (num) => {
    if ((num < 0 && page >= 2) || (num > 0 && page > 0)) {
      let newPage = page + num;
      setPage(newPage);
    }
  };

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("@token"));

    if (!token) {
      navigate("/");
    }

    api
      .get("/books", {
        params: { page: `${page}`, amount: "12" },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setBookList(response.data.data);
      })
      .catch((e) => console.log(e.response));
  }, [page]);

  return (
    <Container>
      {booklist.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt="imagem" width={"100px"} />
          <p>{item.title}</p>
          <p>{item.authors.join(", ")}</p>
          <p>páginas {item.pageCount}</p>
          <p>Editora {item.publisher}</p>
          <p>Publicado em {item.published}</p>

          <button onClick={() => handleModalClick(item)}>Verificar</button>
        </div>
      ))}
      {openModal && <Modal setOpenModal={setOpenModal} book={book} />}
      <div>
        páginas {page} de 100{" "}
        <button onClick={() => handlePage(-1)}>voltar</button>
        <button onClick={() => handlePage(1)}>avançar</button>
      </div>
    </Container>
  );
};
