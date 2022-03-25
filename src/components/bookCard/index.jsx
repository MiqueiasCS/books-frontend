import { Container, Info } from "./styles";

export const Card = ({ book, setBook, setOpenModal }) => {
  const handleModalClick = () => {
    setBook(book);
    setOpenModal(true);
  };

  return (
    <Container onClick={handleModalClick}>
      <div className="image">
        <img src={book.imageUrl} alt="imagem" width={"100px"} />
      </div>
      <Info>
        <div className="book-title-author">
          <p className="book_title">{book.title}</p>
          <p className="book_author">{book.authors.join(", ")}</p>
        </div>

        <div className="book-other-info">
          <p>páginas {book.pageCount}</p>
          <p>Editora {book.publisher}</p>
          <p>Publicado em {book.published}</p>
        </div>
      </Info>
    </Container>
  );
};
