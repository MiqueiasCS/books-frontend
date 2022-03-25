import { Container, ContainerChild } from "./styles";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const Modal = ({ setOpenModal, book }) => {
  return (
    <Container>
      <AiFillCloseCircle onClick={() => setOpenModal(false)} />

      <ContainerChild>
        <img src={book.imageUrl} alt="imagem" width={"100px"} />
        <p>{book.title}</p>
        <p>{book.authors.join(", ")}</p>
        <p>páginas {book.pageCount}</p>
        <p>Editora {book.publisher}</p>
        <p>Publicado em {book.published}</p>
        <p>idioma {book.language}</p>
        <p>isbn10 {book.isbn10}</p>
        <p>isbn13 {book.isbn13}</p>
        <p>descrição {book.description}</p>
      </ContainerChild>
    </Container>
  );
};
