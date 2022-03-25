import { Container, ContainerChild } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";

export const Modal = ({ setOpenModal, book }) => {
  return (
    <Container>
      <div className="close">
        <AiFillCloseCircle onClick={() => setOpenModal(false)} />
      </div>

      <ContainerChild>
        <div className="image">
          <img src={book.imageUrl} alt="imagem" />
        </div>

        <div className="details-container">
          <p className="modal_book-title">{book.title}</p>
          <p className="modal_book-author">{book.authors.join(", ")}</p>

          <div className="modal_book-info">
            <h3 className="topic">informações</h3>
            <div>
              <p>páginas</p> <span>{book.pageCount}</span>
            </div>
            <div>
              <p>Editora</p> <span>{book.publisher}</span>
            </div>
            <div>
              <p>Publicação</p> <span>{book.published}</span>
            </div>
            <div>
              <p>idioma </p>
              <span>{book.language}</span>
            </div>
            <div>
              <p>ISBN-10 </p>
              <span>{book.isbn10}</span>
            </div>
            <div>
              <p>ISBN-13</p> <span>{book.isbn13}</span>
            </div>
          </div>

          <div className="description">
            <h3 className="topic">resenha da editora</h3>
            <p className="modal_book-description">
              <ImQuotesLeft />
              <span>{book.description}</span>
            </p>
          </div>
        </div>
      </ContainerChild>
    </Container>
  );
};
